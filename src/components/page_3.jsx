import { script } from 'motion/react-client';
import React from 'react';

script
function Page3() {

  return (
    
    <div className="bg_1">
      <div className='container' style={{ position: "relative", top: "50px" }} id='page2'>
        <h1 className='font_2 backlight text-white' style={{ fontSize: "60px" }}>
          Experience
        </h1>
        <hr className='bg-white' />

        <div className='row'>
          {/* การ์ดที่ 1 */}
          <div className='col-md-4 col-sm-6 col-12 mb-4'>
            <div className='card' style={{ width: "100%", height: "auto" }}>
              <div className='card-header'>
                <div className='card-title'>
                  <h1 className='text-center font_2'>Project 1</h1>
                </div>
              </div>
              <div className='card-body'>
                <img src='./img/port_1.png' className='w-100' alt="Project 1" />
              </div>
              <div className='card-footer h2 text-center'>ระบบตรวจสอบคำต้องห้าม</div>
            </div>
          </div>

          {/* การ์ดที่ 2 */}
          <div className='col-md-4 col-sm-6 col-12 mb-4'>
            <div className='card' style={{ width: "100%", height: "auto" }}>
              <div className='card-header'>
                <div className='card-title'>
                  <h1 className='text-center font_2'>Project 2</h1>
                </div>
              </div>
              <div className='card-body'>
                <img src='./img/port_2.png' className='w-100' alt="Project 2" />
              </div>
              <div className='card-footer h2 text-center'>เขียนฟังก์ชั่น Wordpares</div>
            </div>
          </div>

          {/* การ์ดที่ 3 */}
          <div className='col-md-4 col-sm-6 col-12 mb-4'>
            <div className='card' style={{ width: "100%", height: "auto" }}>
              <div className='card-header'>
                <div className='card-title'>
                  <h1 className='text-center font_2'>Project 3</h1>
                </div>
              </div>
              <div className='card-body'>
                <img src='./img/port_1.png' className='w-100' alt="Project 3" />
              </div>
              <div className='card-footer h2 text-center'>ระบบตรวจสอบคำต้องห้าม</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page3;