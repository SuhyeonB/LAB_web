import React, { useRef, useState } from 'react';
import {Link} from "react-router-dom";
import "../../Css/Main.css";
import ContentInq from './ContentInq';

function Faq(props) {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const btn1Ref = useRef(); const btn2Ref = useRef(); const btn3Ref = useRef();

    const handleIsOpen1 = () => {
        if (isOpen1) {
            setIsOpen1(false); btn1Ref.current.classList.remove('dropopen');
        } else {
            setIsOpen1(true); btn1Ref.current.classList.add('dropopen');
            setIsOpen2(false); btn2Ref.current.classList.remove('dropopen');
            setIsOpen3(false); btn3Ref.current.classList.remove('dropopen'); 
        };
    }
    const handleIsOpen2 = () => {
        if (isOpen2) {
            setIsOpen2(false); btn2Ref.current.classList.remove('dropopen');
        }else{
            setIsOpen1(false); btn1Ref.current.classList.remove('dropopen');
            setIsOpen2(true); btn2Ref.current.classList.add('dropopen');
            setIsOpen3(false); btn3Ref.current.classList.remove('dropopen');
        }
    }
    const handleIsOpen3 = () => {
        if (isOpen3) {
            setIsOpen3(false); btn3Ref.current.classList.remove('dropopen');
        } else {
            setIsOpen1(false); btn1Ref.current.classList.remove('dropopen');
            setIsOpen2(false); btn2Ref.current.classList.remove('dropopen');
            setIsOpen3(true); btn3Ref.current.classList.add('dropopen');
        }
    }

    return (
        <div id="main" className="wrapper style1">
            <div className="container">
                <div>
                    <h3>FAQ</h3>
                    <dl>
                        <dt className='dropbtn'>
                            <a href="#;" onClick={handleIsOpen1} ref={btn1Ref} className=''>모집 기간은 어떻게 되나요?</a>
                        </dt>
                        {isOpen1 && <dd>현재는 모집을 하고 있지 않으며 추후에 올라올 공지사항을 확인해주시기 바랍니다.</dd>}
                    </dl>
                    <dl>
                        <dt className='dropbtn'>
                            <a href="#;" onClick={handleIsOpen2} ref={btn2Ref} className=''>연락은 어디로 하면 되나요?</a>
                        </dt>
                        {isOpen2 && <dd>카카오톡을 통해 연락해주시면 됩니다.</dd>}
                    </dl>
                    <dl>
                        <dt className='dropbtn'>
                            <a href="#;" onClick={handleIsOpen3} ref={btn3Ref} className=''>해당 실험실 지원은 어떻게 하나요?</a>
                        </dt>
                        {isOpen3 &&<dd>현재는 모집을 하고 있지 않으며 추후에 올라올 공지사항을 확인해주시기 바랍니다.</dd>}
                    </dl>
                </div>
                <div>
                    <h3 className= 'row' style={{margin: "4em 0 0 0"}}>1:1 inquiry details</h3>
                    <div className='row' style={{float: 'right'}}>
                        <button type="button" className="button">
                            <Link to='../faq/save'>글쓰기</Link>
                        </button>
                    </div>
                    <div className='inquiry'>
                        {
                            ContentInq && ContentInq.length > 0 ?
                                ContentInq.map((item)=>{
                                    return(
                                        <div className="inq-content">
                                            <Link to='../faq/inqpost'>{item.Title}</Link>
                                            <em style={{float:"right"}}>{item.Date}</em>
                                            <em style={{float:"right"}}>{item.Answered}</em>
                                        </div>
                                    );
                                })
                            : <div className='align-center'>문의 내역이 없습니다.</div>
                        }
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Faq;