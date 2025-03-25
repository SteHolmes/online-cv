import { collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore'
import { db, storage } from '@/lib/firebase'
import { ref, getDownloadURL } from 'firebase/storage'

const _formatImageData = async (docsArray: QueryDocumentSnapshot[]) => {
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

const _sortImagesByOrderProp = (data: Image[]) => {
  return data.sort((a, b) => a.order - b.order)
}

const fetchImages = async (collectionName: string) => {
  try {
    const snapshot = await getDocs(collection(db, collectionName))

    const formattedData = await _formatImageData(snapshot.docs)
    const imageData = await Promise.all(formattedData)

    if (Object.hasOwn(imageData[0], 'order')) {
      return _sortImagesByOrderProp(imageData)
    } else {
      return imageData
    }

  } catch(error) {
    console.error(error)
  } 
}

export default fetchImages