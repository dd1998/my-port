import React from 'react'


function page_1() {
    function copyToClipboard(email) {
        navigator.clipboard.writeText(email).then(
            () => {
                alert("Email copied to clipboard!"); // แจ้งเตือนเมื่อคัดลอกสำเร็จ
            },
            (err) => {
                alert("Failed to copy email. Please try again."); // แจ้งเตือนเมื่อคัดลอกไม่สำเร็จ
            }
        );
    }
    const email = "nine.night2555@gmail.com";

    return (

        <div className="bg_1 ">

            <div className="container text-white d-flex justify-content-between  font_1  nav_position">
                <div className="">
                    <h1>Jetwit</h1>
                </div>
                <div className='justify-content-end'>
                    <i className="bi bi-list fs-1 social-icon"></i>

                </div>
            </div>

            <div className=' container d-flex   vh-100 align-items-center' style={{ position: "relative", top: "-10%" }}>
                <div className='hi text-white  top-100'>
                    <h4 className='font_1' style={{ color: 'rgba(138,73,221,255)' }}>Hi, My name is:</h4>
                    <h1 className='font_2 backlight' style={{ fontSize: "60px" }}>
                        <span style={{
                            borderBottom: "7px solid rgba(255, 255, 255, 0.7)",
                            borderRadius: "5px"
                        }}>Jetwit</span> Srisuwan
                    </h1>

                    <div className='typewriter font_3 text'>
                        <h4 className='font_3  '>I am studying at Phetchabun Rajabhat University</h4>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <div>
                            <a
                                href="#"
                                className="social-link"
                                onClick={(e) => {
                                    e.preventDefault(); // ป้องกันการนำทางไปที่อื่น
                                    copyToClipboard(email);
                                }}
                            >
                                <i className="bi bi-envelope social-icon fs-1"></i>
                            </a>
                            <a href="https://www.facebook.com/share/15WfQEKjWS/" target="_blank" rel="noopener noreferrer" className="ms-4 social-link">
                                <i className="bi bi-facebook fs-1 social-icon"></i>
                            </a>
                            <a href="https://www.instagram.com/_nine_night/" target="_blank" rel="noopener noreferrer" className="ms-4 social-link">
                                <i className="bi bi-instagram fs-1 social-icon"></i>
                            </a>
                        
                        </div>
                    </div>
                    <div className=''>
                       
<button className="custom-button mt-3" onClick={() => document.getElementById('page2').scrollIntoView({ behavior: 'smooth' })}>Let Go!!!</button>
                       
                    </div>
                </div>
                <img src="/img/gif.gif" className='gifhide' alt="" width="900px" />
            </div>



        </div>

    )
}

export default page_1