import React from 'react'
import './styles/ServiceGallery.css';
import NewBorn from './../imgs/newBorn.jpg'
import Pregnency from './../imgs/pregnency.jpg'
import OneYear from './../imgs/oneYear.jpg'
import Family from './../imgs/family.jpg'

export default function ServiceGallery() {
    return (
            <div className="container-fluid categ">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <img src={Pregnency} />
                            <div className="box-content">
                                <h3 className="title">צילומי הריון</h3>
                                <span className="post">לחץ כאן</span>
                            </div>
                            <ul className="icon">
                                <li><a href="#"><i className="fa fa-search"></i></a></li>
                                <li><a href="#"><i className="fa fa-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <img src={Family} />
                            <div className="box-content">
                                <h3 className="title">צילומי משפחה</h3>
                                <span className="post">לחץ כאן</span>
                            </div>
                            <ul className="icon">
                                <li><a href="#"><i className="fa fa-search"></i></a></li>
                                <li><a href="#"><i className="fa fa-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <img src={NewBorn} />
                            <div className="box-content">
                                <h3 className="title"> ניו בורן</h3>
                                <span className="post">לחץ כאן</span>
                            </div>
                            <ul className="icon">
                                <li><a href="#"><i className="fa fa-search"></i></a></li>
                                <li><a href="#"><i className="fa fa-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <img src={OneYear} />
                            <div className="box-content">
                                <h3 className="title">גיל שנה</h3>
                                <span className="post">לחץ כאן</span>
                            </div>
                            <ul class="icon">
                                <li><a href="#"><i className="fa fa-search"></i></a></li>
                                <li><a href="#"><i className="fa fa-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}
