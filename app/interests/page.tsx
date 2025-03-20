'use client'

import { useCallback, useEffect, useState } from 'react'
import { collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage'
import Carousel from '@/components/Carousel/Carousel'
import ImageContainer from '@/components/ImageContainer/ImageContainer'
import BackButton from '@/components/Buttons/BackButton'
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection'
import InteractiveMap from '@/components/InteractiveMap/InteractiveMap'
import LoadingIcon from '@/components/LoadingIcon/LoadingIcon'
import { db, storage } from '@/lib/firebase'

export default function Interests() {
  const [loadingImages, setLoadingImages] = useState(false)
  const [artworkImages, setArtworkImages] = useState<Image[]>([])
  const [hikingImages, setHikingImages] = useState<Image[]>([])

  const formatImageData = async (docsArray: QueryDocumentSnapshot[]) => {
    return docsArray.map(async (doc: QueryDocumentSnapshot) => {
      const imageRef = ref(storage, doc.data().imgSrc)
      const imageUrl = await getDownloadURL(imageRef)

      return {
        id: doc.id,
        altText: doc.data().altText,
        imgSrc: imageUrl,
        order: doc.data().order,
      }
    })
  }

  const sortImagesByOrderProp = (data: Image[]) => {
    return data.sort((a, b) => a.order - b.order)
  }

  const fetchImages = useCallback(async () => {
    setLoadingImages(true)

    try {
      const artworkSnapshot = await getDocs(collection(db, 'artwork'))
      const hikesSnapshot = await getDocs(collection(db, 'hikes'))

      const formattedArtwork = await formatImageData(artworkSnapshot.docs)
      const artworkImageData = await Promise.all(formattedArtwork)

      const formattedHikes = await formatImageData(hikesSnapshot.docs)
      const hikesImageData = await Promise.all(formattedHikes)

      setArtworkImages(sortImagesByOrderProp(artworkImageData))
      setHikingImages(sortImagesByOrderProp(hikesImageData))
  
    } catch(error) {
      console.error(error)
    } finally {
      setLoadingImages(false)
    }
  }, [])

  useEffect(() => {
    if (!db) {
      console.error('Firestore instance is not available');
      return;
    }
  
    fetchImages()
  }, [fetchImages])

  return (
    <div className="pageTransition pageTransition--geometry">
      <div className="pageContent">
        <BackButton />
        <h1>Hobbies and Interests</h1>
        <section>
          <div className="headingBadge"><h3>Drawing and painting</h3></div>
          <div className="contentCard contentCard--titled">
            <p>One of my main interests outside of coding is art. I attend a local still-life drawing class once a month and regularly paint and sketch landscapes which I post on my Instagram account.</p>
            <p>I paint landscapes in oils and also keep a sketchbook of watercolour sketches as a kind of travel journal to make a note of places I've been.</p>
            
            { 
              !loadingImages ? 
              (<Carousel slides={artworkImages} loading={loadingImages} />) 
              : (<LoadingIcon />) 
            }

          </div>
        </section>
        <AnimatedSection>
          <div className="headingBadge"><h3>Music</h3></div>
          <div className="contentCard contentCard--titled">
            <p>I enjoy listening to an eclectic range of music, but also play the guitar and piano (although I'd say it's "playing" the piano in the loosest sense of the word!).</p>
            <p>I occassionally play in bands and recently started up a project with a couple of friends themed around the films of David Lynch, incorporating film quotes into instrumental compositions.</p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="headingBadge"><h3>Hiking and wild camping</h3></div>
          <div className="contentCard contentCard--titled">
            <p>I live on the edge of the Peak District and love hiking! I never get bored of the views, and often take a sketchbook out to scribble down a particularly good view or interesting elements of the landscape.</p>
            <p>In the past few years I've also got into wild camping and made trips to Snowdonia and the Lake District with friends; tents on our backs, heading up mountains to set up camp on the summit and catch the sunset.</p>
            <div className="subSection">
              { !loadingImages ? (<ImageContainer images={hikingImages} loading={loadingImages} />) : (<div className="loadingIconContainer"><div className="loadingIcon"><div></div><div></div></div></div>) }
            </div>
            <section>
              <h3>Wish List</h3>
              <p>There's still so many great hiking spots I'd love to explore around Britain including...</p>
              <div className="subSection"><InteractiveMap /></div>
            </section>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="headingBadge"><h3>Running</h3></div>
          <div className="contentCard contentCard--titled">
            <p>When I started a remote job role I realised I had to take a more proactive approach to exercising and so the most straightforward option was running!</p>
            <p>I sometimes tie running in with sketching to give myself a destination; run up the hill, add a picture to the sketchbook, run back. I feel like this gives the journey a bit more purpose and initially motivated me to get out there and do it.</p>
            <p>However the passion for running in itself has well and truly set in now so I try to get out on a trail most days throughout the week.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}