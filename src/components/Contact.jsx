import React from 'react'
import './styles/Contact.css'
import conImg from './../imgs/contactPic.jpg'

export default function Contact() {
    return (
        <div>
        <div className="form-bg">
            <div className="row">
                <div className="col-md-offset-3 col-md-6">
                    <div className="form-container">
                        <div className="form-icon">
                            <i className="fa fa-envelope-open"></i>
                        </div>
                        <form className="form-horizontal">
                            <h3 className="title">צרו קשר</h3>
                            <div className="form-group">
                                <span className="input-icon"><i className="fa fa-user"></i></span>
                                <input className="form-control" type="text" placeholder="שם מלא" />
                            </div>
                            <div className="form-group">
                                <span className="input-icon"><i className="fa fa-phone"></i></span>
                                <input className="form-control" type="text" placeholder="מספר טלפון" />
                            </div>
                            <div claclassNamess="form-group">
                                <span className="input-icon"><i class="fa fa-envelope"></i></span>
                                <input className="form-control" type="email" placeholder='כתובת דוא"ל'/>
                            </div>
                            <div className="form-group">
                                <textarea class="form-control" rows="4" cols="120" placeholder="הודעה"></textarea>
                            </div>

                                <button type="button" className="btn btn-default" data-dismiss="modal">
                                סגור </button>
                                <button class="btn signin">שלח הודעה <i class="fa fa-long-arrow-alt-right"></i></button>

                        </form>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={conImg} alt='' className='smallimg'/>
                    <img src={conImg} alt='' className='smallimg lefty'/>
                    <img src={conImg} alt='' className='smallimg righty'/>
                </div>
            </div>
        </div>
    </div>
    )
}
