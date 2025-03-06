import Image from 'next/image'
import styles from './LogoGrid.module.scss'

const LogoGrid = function() {
  return (
      <div className={styles.logoGrid}>
        <div className="">
          <Image src="/logos/html.png" alt="" width={100} height={100} />
          <div className="skills__item-name">HTML</div>
        </div>
        <div className="">
          <Image src="/logos/css.png" alt="" width={100} height={100} />
          <div className="skills__item-name">CSS</div>
        </div>
        <div className="">
          <Image src="/logos/javascript.png" alt="" width={100} height={100} />
          <div className="skills__item-name">JAVASCRIPT</div>
        </div>
        <div className="">
          <Image src="/logos/sass.png" alt="" width={100} height={100} />
          <div className="skills__item-name">SASS</div>
        </div>
        <div className="">
          <Image src="/logos/git.png" alt="" width={100} height={100} />
          <div className="skills__item-name">GIT</div>
        </div>
        <div className="">
          <Image src="/logos/vue.png" alt="" width={100} height={100} />
          <div className="skills__item-name">VUE.JS</div>
        </div>
        <div className="">
          <Image src="/logos/nuxt.png" alt="" width={100} height={100} />
          <div className="skills__item-name">NUXT</div>
        </div>
        <div className="">
          <Image src="/logos/react.png" alt="" width={100} height={100} />
          <div className="skills__item-name">REACT</div>
        </div>
        <div className="">
          <Image src="/logos/next.png" alt="" width={100} height={100} />
          <div className="skills__item-name">NEXT.JS</div>
        </div>
        <div className="">
          <Image src="/logos/node.png" alt="" width={100} height={100} />
          <div className="skills__item-name">NODE.JS</div>
        </div>
      </div>
  )
}

export default LogoGrid