import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.showAfterLGScrn}>
          <nav class="navbar" style={{ background: 'transparent' }} data-bs-theme="dark">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" style={{ border: '0' }}>
                <span class="navbar-toggler-icon"></span>
                <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpZA7QOK.png" alt="#ImgNotFound" width='100px' />
              </button>
              <div class="d-flex">
                <button type="button" class="btn mx-2" style={{ background: '#4A4846', color: 'white', fontWeight: '700' }}>Sign Up</button>
                <button type="button" class="btn mx-2" style={{ background: '#95BB4A', color: 'white', fontWeight: '700' }}>Log In</button>
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.leftSidebar} style={{ position: 'fixed' }}>
          <div className="p-xl-3 pt-2">
            <img src="https://www.chess.com/bundles/web/images/brand/chesscom_pawn.b51896bf.png" alt="#ImgNotFound" width='40px' height='40px' className={styles.showAfterXLScrn} />
            <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpZA7QOK.png" alt="#ImgNotFound" width='100%' className={styles.hideAfterXLScrn} />
          </div>
          <ul class="list-group">
            <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>♟️ <span className={`${styles.hideAfterXLScrn} ${styles.optionsText}`}>Play</span></li>
            <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>🧩 <span className={`${styles.hideAfterXLScrn} ${styles.optionsText}`}>Puzzles</span></li>
            <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>🎓 <span className={`${styles.hideAfterXLScrn} ${styles.optionsText}`}>Learn</span></li>
            <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>📊 <span className={`${styles.hideAfterXLScrn} ${styles.optionsText}`}>Watch</span></li>
            <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>📰 <span className={`${styles.hideAfterXLScrn} ${styles.optionsText}`}>News</span></li>
            <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>👨‍👨‍👦 <span className={`${styles.hideAfterXLScrn} ${styles.optionsText}`}>Social</span></li>
            <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>📂 <span className={`${styles.hideAfterXLScrn} ${styles.optionsText}`}>More</span></li>
            <div className={styles.hideAfterXLScrn}>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', border: '0' }}><input type="text" placeholder='Search' className='p-1' style={{ width: '100%', background: '#3D3B39', color: 'white', borderRadius: '5px', border: '1px solid gray' }} /></li>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', border: '0' }}><button type="button" class="btn w-100" style={{ background: '#4A4846', color: 'white', fontWeight: '700' }}>Sign Up</button></li>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', border: '0' }}><button type="button" class="btn w-100" style={{ background: '#95BB4A', color: 'white', fontWeight: '700' }}>Log In</button></li>
            </div>
            <div className={styles.showAfterXLScrn}>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', border: '0' }}>🔎</li>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', border: '0' }}><button type="button" class="btn w-100 p-1" style={{ background: '#4A4846', color: 'white', fontWeight: '700' }}>🔐</button></li>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', border: '0' }}><button type="button" class="btn w-100 p-1" style={{ background: '#95BB4A', color: 'white', fontWeight: '700' }}>🔑</button></li>
            </div>
            <p className='text-white fixed-bottom pb-5 px-2'>🌍 English</p>
            <p className='text-white fixed-bottom pb-3 px-2'>❓ Help</p>
          </ul>
        </div>

        <div className={`${styles.rightSidebar} px-2 pt-3`}>
          <div className="container-lg px-xxl-5">
            <div className="row mx-xl-5">
              <div className="col-md-6 order-md-2 text-white px-xxl-5">
                <h1 className={`${styles.mainHeading} text-center py-3`}>Play Chess Online <br /> on the #1 Site!</h1>
                <div className="text-center">
                  <div className="row">
                    <div className="col-6">
                      <h6>15,420,606 <span className='text-secondary'>Games Today</span></h6>
                    </div>
                    <div className="col-6" style={{ float: 'right' }}>
                      <h6>224,992 <span className='text-secondary'>Playing Now</span></h6>
                    </div>
                  </div>
                  <button type="button" class="btn mt-3" style={{ background: '#95BB4A', color: 'white', fontWeight: '700', maxWidth: '500px' }}>
                    <div className="row">
                      <div className="col-3" style={{ margin: 'auto' }}>
                        <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png" alt="#ImgNotFound" width="80%" />
                      </div>
                      <div className="col-9" style={{ textAlign: 'left' }}>
                        <h2>Play Online</h2>
                        <p>Play at with your level</p>
                      </div>
                    </div>
                  </button>
                  <button type="button" class="btn mt-3" style={{ background: '#4A4846', color: 'white', fontWeight: '700', maxWidth: '500px' }}>
                    <div className="row">
                      <div className="col-3" style={{ margin: 'auto' }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/831/831807.png" alt="#ImgNotFound" width="80%" />
                      </div>
                      <div className="col-9" style={{ textAlign: 'left' }}>
                        <h2>Play Computer</h2>
                        <p>Play vs customizable training bots</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src="https://www.chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png" alt="#ImgNotFound" className='mt-lg-0 mt-3' style={{ maxWidth: '500px', maxHeight: '500px', width: '100%' }} />
              </div>
            </div>

            <div className="row mx-xl-5 mt-5 p-5" style={{ background: '#272522' }}>
              <div className="col-md-6 text-white">
                <h1 className='text-center py-3'>Solve Chess Puzzles</h1>
                <div className="text-center mb-5">
                  <button type="button" class="btn mt-3" style={{ background: '#95BB4A', color: 'white', fontWeight: '700' }}>
                    Solve Puzzles
                  </button>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-4 col-md-3 col-2">
                    <img src="https://www.chess.com/bundles/web/images/faces/hikaru-nakamura.e1ca9267.jpg" alt="#ImgNotFound" width="100%" />
                  </div>
                  <div className="col-lg-8 col-md-9 col-10" style={{ textAlign: 'left' }}>
                    <p>"Puzzles are the best way to improve pattern recognition, and no site does it better."</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src="https://www.chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png" alt="#ImgNotFound" className='mt-lg-0 mt-3' style={{ maxWidth: '400px', maxHeight: '400px', width: '100%' }} />
              </div>
            </div>

            <div className="row mx-xl-5 mt-5 p-5" style={{ background: '#272522' }}>
              <div className="col-md-6 order-md-2 text-white px-xxl-5">
                <h1 className='text-center py-3'>Take Chess Lessons</h1>
                <div className="text-center mb-5">
                  <button type="button" class="btn mt-3" style={{ background: '#95BB4A', color: 'white', fontWeight: '700' }}>
                    Start Lessons
                  </button>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-4 col-md-3 col-2">
                    <img src="https://www.chess.com/bundles/web/images/faces/anna-rudolf.193d08a5.jpg" alt="#ImgNotFound" width="100%" />
                  </div>
                  <div className="col-lg-8 col-md-9 col-10" style={{ textAlign: 'left' }}>
                    <p>"Chess.com lessons make it easy to learn to play, then challenge you to continue growing."</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src="https://www.chess.com/bundles/web/images/web/board-lessons.825946d3@2x.png" alt="#ImgNotFound" className='mt-lg-0 mt-3' style={{ maxWidth: '400px', maxHeight: '400px', width: '100%' }} />
              </div>
            </div>


            <h1 className='text-center text-white mt-5'><b>Follow what’s happening in Chess Today.</b></h1>
            <div className="row">
              <div className="col-md-6 mt-4">
                <img src="https://images.chesscomfiles.com/uploads/v1/news/1234323.94a210ad.507x286o.f45ed28d6228.png" alt="#ImgNotFound" className="w-100" />
              </div>
              <div className="col-md-6 mt-4">
                <img src="https://images.chesscomfiles.com/uploads/v1/news/1234661.917724e0.507x286o.518c81fda44f.png" alt="#ImgNotFound" className="w-100" />
              </div>
              <div className="col-md-6 mt-4">
                <img src="https://images.chesscomfiles.com/uploads/v1/article/29407.9ed85da2.507x286o.04abcf90f029.jpg" alt="#ImgNotFound" className="w-100" />
              </div>
              <div className="col-md-6 mt-4">
                <img src="https://images.chesscomfiles.com/uploads/v1/video/9603.e05c5262.507x286o.0079c5872fa5.png" alt="#ImgNotFound" className="w-100" />
              </div>
            </div>

            <div className="text-center mt-5 mb-3">
              <button type="button" class="btn mt-3" style={{ background: '#95BB4A', color: 'white', fontWeight: '700', fontSize: '24px' }}>
                Chess Today
              </button>
            </div>

            <div class="text-center">
              <Link href="https://support.chess.com" className={`mx-2 ${styles.footerOptions}`}>
                Help
              </Link>
              <Link href="https://www.chess.com/terms" className={`mx-2 ${styles.footerOptions}`}>
                Chess Terms
              </Link>
              <Link href="https://www.chess.com/about" className={`mx-2 ${styles.footerOptions}`}>
                About
              </Link>
              <Link href="https://www.chess.com/jobs" target="_blank" className={`mx-2 ${styles.footerOptions}`}>
                Jobs
              </Link>
              <Link href="https://www.chess.com/developers" target="_blank" className={`mx-2 ${styles.footerOptions}`}>
                Developers
              </Link>
              <Link href="https://www.chess.com/legal/user-agreement" target="_blank" className={`mx-2 ${styles.footerOptions}`}>
                User Agreement
              </Link>
              <Link href="https://www.chess.com/legal/privacy" target="_blank" className={`mx-2 ${styles.footerOptions}`}>
                Privacy
              </Link>
              <Link href="https://www.chess.com/legal/fair-play" target="_blank" className={`mx-2 ${styles.footerOptions}`}>
                Fair Play
              </Link>
              <Link href="https://www.chess.com/legal/community" target="_blank" className={`mx-2 ${styles.footerOptions}`}>
                Community
              </Link>
              <Link href="https://www.chess.com/partners" target="_blank" className={`mx-2 ${styles.footerOptions}`}>
                Partners
              </Link>
              <Link href="https://www.chess.com/legal/compliance" target="_blank" className={`mx-2 ${styles.footerOptions}`}>
                Compliance
              </Link>
              <Link href="https://www.chess.com/" className={`mx-2 ${styles.footerOptions}`}>
                Chess.com © 2023
              </Link>

              <h6 style={{ color: 'gray', marginTop: '5px', fontSize: '20px', marginBottom: '20px' }}>
                <i class="fa fa-apple mx-2"></i>
                <i class="fa fa-android mx-2"></i>
                <i class="fa fa-twitter mx-2"></i>
                <i class="fa fa-youtube mx-2"></i>
                <i class="fa fa-instagram mx-2"></i>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
