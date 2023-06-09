import Link from 'next/link';
import { useState } from 'react';
import logo from './media/logo.png';
import img1 from './media/img-1.png';
import img2 from './media/img-2.png';
import img3 from './media/img-3.png';
import img4 from './media/img-4.jpg';
import img5 from './media/img-5.jpg';
import img6 from './media/img-6.png';
import img7 from './media/img-7.png';
import img8 from './media/img-8.jpg';
import img9 from './media/img-9.png';
import logo2 from './media/logo-2.png';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/Home.module.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.body}>
        <div className={styles.showAfterLGScrn}>
          <nav class="navbar" style={{ background: 'transparent' }} data-bs-theme="dark">
            <div class="container-fluid">
              <button class="navbar-toggler" onClick={handleShow} type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" style={{ border: '0' }}>
                <span class="navbar-toggler-icon"></span>
                <img src={logo.src} alt="#ImgNotFound" width='100px' />
              </button>
              <div class="d-flex">
                <button type="button" class="btn mx-sm-2 mx-1" style={{ background: '#4A4846', color: 'white', fontWeight: '700' }}>Sign Up</button>
                <button type="button" class="btn mx-sm-2 mx-1" style={{ background: '#95BB4A', color: 'white', fontWeight: '700' }}>Log In</button>
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.leftSidebar} style={{ position: 'fixed' }}>
          <div className="p-xl-3 pt-2">
            <img src={logo2.src} alt="#ImgNotFound" width='40px' height='40px' className={styles.showAfterXLScrn} />
            <img src={logo.src} alt="#ImgNotFound" width='100%' className={styles.hideAfterXLScrn} />
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
                <img src={img1.src} alt="#ImgNotFound" className='mt-lg-0 mt-3' style={{ maxWidth: '500px', maxHeight: '500px', width: '100%' }} />
              </div>
            </div>

            <div className="row mx-xl-5 mt-5 p-sm-5 p-3" style={{ background: '#272522' }}>
              <div className="col-md-6 text-white">
                <h1 className='text-center py-3'>Solve Chess Puzzles</h1>
                <div className="text-center mb-5">
                  <button type="button" class="btn mt-3" style={{ background: '#95BB4A', color: 'white', fontWeight: '700' }}>
                    Solve Puzzles
                  </button>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-4 col-md-3 col-sm-2 col-3" style={{ margin: 'auto' }}>
                    <img src={img4.src} alt="#ImgNotFound" width="100%" />
                  </div>
                  <div className="col-lg-8 col-md-9 col-sm-10 col-9" style={{ textAlign: 'left' }}>
                    <p>"Puzzles are the best way to improve pattern recognition, and no site does it better."</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src={img2.src} alt="#ImgNotFound" className='mt-lg-0 mt-3' style={{ maxWidth: '400px', maxHeight: '400px', width: '100%' }} />
              </div>
            </div>

            <div className="row mx-xl-5 mt-5 p-sm-5 p-3" style={{ background: '#272522' }}>
              <div className="col-md-6 order-md-2 text-white px-xxl-5">
                <h1 className='text-center py-3'>Take Chess Lessons</h1>
                <div className="text-center mb-5">
                  <button type="button" class="btn mt-3" style={{ background: '#95BB4A', color: 'white', fontWeight: '700' }}>
                    Start Lessons
                  </button>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-4 col-md-3 col-sm-2 col-3" style={{ margin: 'auto' }}>
                    <img src={img5.src} alt="#ImgNotFound" width="100%" />
                  </div>
                  <div className="col-lg-8 col-md-9 col-sm-10 col-9" style={{ textAlign: 'left' }}>
                    <p>"Chess.com lessons make it easy to learn to play, then challenge you to continue growing."</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src={img3.src} alt="#ImgNotFound" className='mt-lg-0 mt-3' style={{ maxWidth: '400px', maxHeight: '400px', width: '100%' }} />
              </div>
            </div>


            <h1 className='text-center text-white mt-5'><b>Follow what’s happening in Chess Today.</b></h1>
            <div className="row">
              <div className="col-md-6 mt-4">
                <img src={img6.src} alt="#ImgNotFound" className="w-100" />
              </div>
              <div className="col-md-6 mt-4">
                <img src={img7.src} alt="#ImgNotFound" className="w-100" />
              </div>
              <div className="col-md-6 mt-4">
                <img src={img8.src} alt="#ImgNotFound" className="w-100" />
              </div>
              <div className="col-md-6 mt-4">
                <img src={img9.src} alt="#ImgNotFound" className="w-100" />
              </div>
            </div>

            <div className="text-center mt-5 mb-3">
              <button type="button" class="btn mt-3" style={{ background: '#95BB4A', color: 'white', fontWeight: '700', fontSize: '24px' }}>
                Chess Today
              </button>
            </div>

            <div class="text-center">
              <Link href="#" className={`mx-2 ${styles.footerOptions}`}>
                Help
              </Link>
              <Link href="#" className={`mx-2 ${styles.footerOptions}`}>
                Chess Terms
              </Link>
              <Link href="#" className={`mx-2 ${styles.footerOptions}`}>
                About
              </Link>
              <Link href="#" className={`mx-2 ${styles.footerOptions}`}>
                Jobs
              </Link>
              <Link href="#" className={`mx-2 ${styles.footerOptions}`}>
                Developers
              </Link>
              <Link href="#" className={`mx-2 ${styles.footerOptions}`}>
                User Agreement
              </Link>
              <Link href="#" className={`mx-2 ${styles.footerOptions}`}>
                Privacy
              </Link>
              <Link href="#" className={`mx-2 ${styles.footerOptions}`}>
                Fair Play
              </Link>
              <Link href="#" className={`mx-2 ${styles.footerOptions}`}>
                Community
              </Link>
              <Link href="#" className={`mx-2 ${styles.footerOptions}`}>
                Partners
              </Link>
              <Link href="#" className={`mx-2 ${styles.footerOptions}`}>
                Compliance
              </Link>
              <Link href="#" className={`mx-2 ${styles.footerOptions}`}>
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


      <Offcanvas show={show} onHide={handleClose} style={{ width: '180px' }}>
        <Offcanvas.Header>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offcanvasLeftSidebar}>
          <div>
            <div className="">
              {/* <img src={logo2.src} alt="#ImgNotFound" width='40px' height='40px' className={styles.showAfterXLScrn} /> */}
              {/* <img src={logo.src} alt="#ImgNotFound" width='100%' className={styles.hideAfterXLScrn} /> */}
              <img src={logo.src} alt="#ImgNotFound" width='100%' />
            </div>
            <ul class="list-group">
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>♟️ <span className={`${styles.optionsText}`}>Play</span></li>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>🧩 <span className={`${styles.optionsText}`}>Puzzles</span></li>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>🎓 <span className={`${styles.optionsText}`}>Learn</span></li>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>📊 <span className={`${styles.optionsText}`}>Watch</span></li>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>📰 <span className={`${styles.optionsText}`}>News</span></li>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>👨‍👨‍👦 <span className={`${styles.optionsText}`}>Social</span></li>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', color: 'white', border: '0', fontWeight: '700', fontSize: '20px' }}>📂 <span className={`${styles.optionsText}`}>More</span></li>
              {/* <div className={styles.hideAfterXLScrn}> */}
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', border: '0' }}><input type="text" placeholder='Search' className='p-1' style={{ width: '100%', background: '#3D3B39', color: 'white', borderRadius: '5px', border: '1px solid gray' }} /></li>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', border: '0' }}><button type="button" class="btn w-100" style={{ background: '#4A4846', color: 'white', fontWeight: '700' }}>Sign Up</button></li>
              <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', border: '0' }}><button type="button" class="btn w-100" style={{ background: '#95BB4A', color: 'white', fontWeight: '700' }}>Log In</button></li>
              {/* </div> */}
              {/* <div className={styles.showAfterXLScrn}>
                <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', border: '0' }}>🔎</li>
                <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', border: '0' }}><button type="button" class="btn w-100 p-1" style={{ background: '#4A4846', color: 'white', fontWeight: '700' }}>🔐</button></li>
                <li class="list-group-item leftSideOptions px-xl-3 p-2" style={{ background: '#272522', border: '0' }}><button type="button" class="btn w-100 p-1" style={{ background: '#95BB4A', color: 'white', fontWeight: '700' }}>🔑</button></li>
              </div> */}
              <p className='text-white px-2'>🌍 English</p>
              <p className='text-white px-2'>❓ Help</p>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
