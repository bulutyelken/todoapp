import { useState } from 'react'
import {BsGithub,BsLinkedin} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {MdFileCopy} from 'react-icons/md'
function Footer(){
    var [gmail,setGmail]= useState(0);
    function gmailClick(){
        setGmail(!gmail)
        console.log(gmail)
    }
    function GmailInfo(props) {
        if (!props.show) {
            return null;
        }

        return (
                <p id='mailp'>bulutyelken@gmail.com <MdFileCopy className='clickable' onClick={()=>{
                    navigator.clipboard.writeText("bulutyelken@gmail.com");
                    document.getElementById("mailp").textContent = "copied 😊"
                    setTimeout(function() {
                        setGmail(false)
                    }, 700);
                    }}/></p>
        );
    }
    return <footer>
        <div id="gmailinfo">
            <GmailInfo show={gmail}/>
        </div>
        <div id='footerdiv'>
            <p id="footerp">This website created by <a href='https://www.instagram.com/bulutyelken/' target="_blank" rel='noreferrer'>Bulut</a>.</p>
            <div className='iconsdiv'>
                <a href="https://github.com/bulutyelken" target="_blank" rel='noreferrer'><BsGithub size={30}  color="black"/></a>
                <SiGmail id='gmail' className='clickable' onClick={gmailClick} size={30} color="black"/>
                <a href="https://www.linkedin.com/in/bulut-yelken-319962199" target="_blank" rel='noreferrer'><BsLinkedin  size={30} color="black"/></a>
            </div>
        </div>
    </footer>
}

export default Footer;