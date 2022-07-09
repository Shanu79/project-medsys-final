<<<<<<< HEAD
import React from 'react'
import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"
import Img from "./home.png"

import img11 from "./11.svg"
import imgHeader from "./blogHeader.png"


export default function BlogPost() {
    return (
        <>
            <div className="max-width-1 m-auto">
                <hr />
            </div>
            <div className="post-img">
                <img src={imgHeader} alt="" />
            </div>
            <div className="m-auto content max-width-1 my-2">
                <div className="content-left">
                    <h1 className="text-3xl pb-6 text-center text-mainColor font-bold">The heaven for bloggers</h1>
                    <p>iBlog is a website which lets you submit an article which upon approval will be up on our website and you
                        can get a good amount of reach from here!</p>
                    <p>My Halloween decorations are staying in the box this year. To be honest, they didn’t make it out of the
                        box last year either. My Halloween spirit has officially been bludgeoned to death by teenagers who no
                        longer care and a persistent October fear of the Northern California wildfires. And speaking of fear,
                        isn’t there more than enough of that going around? Maybe all of us can pretend that Halloween isn’t even
                        happening this year?</p>
                </div>
                <div className="content-right">
                    <img src={Img} alt="iBlog" className='max-w-fit' />
                </div>
            </div>
            <div className="max-width-1 m-auto">
                <hr />
            </div>
            <div className="home-articles max-width-1 m-auto font2">
                <h2 className="text-3xl pb-6 text-center text-mainColor font-bold">Featured Articles</h2>
                <div className="year-box adjust-year">
                    <div>
                        <h3>Year </h3>
                    </div>
                    <div>
                        <input type="radio" name="year" id="" /> 2020
                    </div>
                    <div>
                        <input type="radio" name="year" id="" /> 2021
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img3} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img1} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img2} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img1} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img11} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img3} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img4} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img11} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>

            </div>
            <div className="m-auto blog-post-content max-width-2 my-2">
                <h1 className="font1 text-3xl pb-6 text-center text-mainColor font-bold">The heaven for bloggers</h1>
                <div className="blogpost-meta">
                    <div className="author-info">
                        <div>
                            <b className='text-2xl text-mainColor '>
                                Author - Bhushan shirude
                            </b>
                        </div>
                        <div>04 January. 6 min read</div>
                    </div>
                    <div className="social">
                        <svg width="29" height="29" className="hk"><path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg>

                        <svg style={{ background: "black", borderRadius: "21px" }} width="29" height="29" viewBox="0 0 29 29" fill="none" className="hk"><path d="M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z" fill="#fff"></path></svg>

                        <svg width="29" height="29" className="hk"><path d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"></path></svg>

                    </div>
                </div>
                <p className="font1">In communications and information processing, code is a system of rules to convert information—such as a letter, word, sound, image, or gesture—into another form, sometimes shortened or secret, for communication through a communication channel or storage in a storage medium. An early example is the invention of language, which enabled a person, through speech, to communicate what they thought, saw, heard or felt to others. But speech limits the range of communication to the distance a voice can carry, and limits the audience to those present when the speech is uttered . The invention of writing, which converted spoken language into visual symbols, extended the range of communication across space and time.

                    The process of encoding converts information from a source into symbols for communication or storage. Decoding is the reverse process, converting code symbols back into a form that the recipient understands, such as English or/and Spanish.

                    One reason for coding is to enable communication in places where ordinary plain language, spoken or written, is difficult or impossible. For example, semaphore, where the configuration of flags held by a signaler or the arms of a semaphore tower encodes parts of the message, typically individual letters and numbers. Another person standing a great distance away can interpret the flags and reproduce the words sent.</p>
                <p className="font1">In communications and information processing, code is a system of rules to convert information—such as a letter, word, sound, image, or gesture—into another form, sometimes shortened or secret, for communication through a communication channel or storage in a storage medium. An early example is the invention of language, which enabled a person, through speech, to communicate what they thought, saw, heard or felt to others. But speech limits the range of communication to the distance a voice can carry, and limits the audience to those present when the speech is uttered . The invention of writing, which converted spoken language into visual symbols, extended the range of communication across space and time.

                    The process of encoding converts information from a source into symbols for communication or storage. Decoding is the reverse process, converting code symbols back into a form that the recipient understands, such as English or/and Spanish.

                    One reason for coding is to enable communication in places where ordinary plain language, spoken or written, is difficult or impossible. For example, semaphore, where the configuration of flags held by a signaler or the arms of a semaphore tower encodes parts of the message, typically individual letters and numbers. Another person standing a great distance away can interpret the flags and reproduce the words sent.</p>
                <p className="font1">In communications and information processing, code is a system of rules to convert information—such as a letter, word, sound, image, or gesture—into another form, sometimes shortened or secret, for communication through a communication channel or storage in a storage medium. An early example is the invention of language, which enabled a person, through speech, to communicate what they thought, saw, heard or felt to others. But speech limits the range of communication to the distance a voice can carry, and limits the audience to those present when the speech is uttered . The invention of writing, which converted spoken language into visual symbols, extended the range of communication across space and time.

                    The process of encoding converts information from a source into symbols for communication or storage. Decoding is the reverse process, converting code symbols back into a form that the recipient understands, such as English or/and Spanish.

                    One reason for coding is to enable communication in places where ordinary plain language, spoken or written, is difficult or impossible. For example, semaphore, where the configuration of flags held by a signaler or the arms of a semaphore tower encodes parts of the message, typically individual letters and numbers. Another person standing a great distance away can interpret the flags and reproduce the words sent.</p>
                <p className="font1">In communications and information processing, code is a system of rules to convert information—such as a letter, word, sound, image, or gesture—into another form, sometimes shortened or secret, for communication through a communication channel or storage in a storage medium. An early example is the invention of language, which enabled a person, through speech, to communicate what they thought, saw, heard or felt to others. But speech limits the range of communication to the distance a voice can carry, and limits the audience to those present when the speech is uttered . The invention of writing, which converted spoken language into visual symbols, extended the range of communication across space and time.

                    The process of encoding converts information from a source into symbols for communication or storage. Decoding is the reverse process, converting code symbols back into a form that the recipient understands, such as English or/and Spanish.

                    One reason for coding is to enable communication in places where ordinary plain language, spoken or written, is difficult or impossible. For example, semaphore, where the configuration of flags held by a signaler or the arms of a semaphore tower encodes parts of the message, typically individual letters and numbers. Another person standing a great distance away can interpret the flags and reproduce the words sent.</p>
            </div>

            <div className="max-width-1 m-auto"><hr /></div>
            <div className="home-articles max-width-1 m-auto font2">
                <h2 className="text-3xl pb-6 text-center text-mainColor font-bold">People who read this also read</h2>
                <div className="row">


                    <div className="home-article more-post">
                        <div className="home-article-img">
                            <img src={img11} alt="article" />
                        </div>
                        <div className="home-article-content font1 center">
                            <a href="/blogpost.html"><h3>Learn more about Machine Learning techniques in India by joining this channel</h3></a>

                            <div>Author Name</div>
                            <span>07 January | 6 min read</span>
                        </div>
                    </div>
                    <div className="home-article more-post">
                        <div className="home-article-img">
                            <img src={img1} alt="article" />
                        </div>
                        <div className="home-article-content font1 center">
                            <a href="/blogpost.html"><h3>Learn more about Machine Learning techniques in India by joining this channel</h3></a>

                            <div>Author Name</div>
                            <span>07 January | 6 min read</span>
                        </div>
                    </div>
                    <div className="home-article more-post">
                        <div className="home-article-img">
                            <img src={img2} alt="article" />
                        </div>
                        <div className="home-article-content font1 center">
                            <a href="/blogpost.html"><h3>Learn more about Machine Learning techniques in India by joining this channel</h3></a>

                            <div>Author Name</div>
                            <span>07 January | 6 min read</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
=======
import React from 'react'
import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"
import Img from "./home.png"

import img11 from "./11.svg"
import imgHeader from "./blogHeader.png"


export default function BlogPost() {
    return (
        <>
            <div className="max-width-1 m-auto">
                <hr />
            </div>
            <div className="post-img">
                <img src={imgHeader} alt="" />
            </div>
            <div className="m-auto content max-width-1 my-2">
                <div className="content-left">
                    <h1 className="text-3xl pb-6 text-center text-mainColor font-bold">The heaven for bloggers</h1>
                    <p>iBlog is a website which lets you submit an article which upon approval will be up on our website and you
                        can get a good amount of reach from here!</p>
                    <p>My Halloween decorations are staying in the box this year. To be honest, they didn’t make it out of the
                        box last year either. My Halloween spirit has officially been bludgeoned to death by teenagers who no
                        longer care and a persistent October fear of the Northern California wildfires. And speaking of fear,
                        isn’t there more than enough of that going around? Maybe all of us can pretend that Halloween isn’t even
                        happening this year?</p>
                </div>
                <div className="content-right">
                    <img src={Img} alt="iBlog" className='max-w-fit' />
                </div>
            </div>
            <div className="max-width-1 m-auto">
                <hr />
            </div>
            <div className="home-articles max-width-1 m-auto font2">
                <h2 className="text-3xl pb-6 text-center text-mainColor font-bold">Featured Articles</h2>
                <div className="year-box adjust-year">
                    <div>
                        <h3>Year </h3>
                    </div>
                    <div>
                        <input type="radio" name="year" id="" /> 2020
                    </div>
                    <div>
                        <input type="radio" name="year" id="" /> 2021
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img3} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img1} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img2} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img1} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img11} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img3} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img4} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>
                <div className="home-article">
                    <div className="home-article-img">
                        <img src={img11} alt="article" />
                    </div>
                    <div className="home-article-content font1">
                        <a href="/blogpost.html">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        </a>

                        <div>Author Name</div>
                        <span>07 January | 6 min read</span>
                    </div>
                </div>

            </div>
            <div className="m-auto blog-post-content max-width-2 my-2">
                <h1 className="font1 text-3xl pb-6 text-center text-mainColor font-bold">The heaven for bloggers</h1>
                <div className="blogpost-meta">
                    <div className="author-info">
                        <div>
                            <b className='text-2xl text-mainColor '>
                                Author - Bhushan shirude
                            </b>
                        </div>
                        <div>04 January. 6 min read</div>
                    </div>
                    <div className="social">
                        <svg width="29" height="29" className="hk"><path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg>

                        <svg style={{ background: "black", borderRadius: "21px" }} width="29" height="29" viewBox="0 0 29 29" fill="none" className="hk"><path d="M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z" fill="#fff"></path></svg>

                        <svg width="29" height="29" className="hk"><path d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"></path></svg>

                    </div>
                </div>
                <p className="font1">In communications and information processing, code is a system of rules to convert information—such as a letter, word, sound, image, or gesture—into another form, sometimes shortened or secret, for communication through a communication channel or storage in a storage medium. An early example is the invention of language, which enabled a person, through speech, to communicate what they thought, saw, heard or felt to others. But speech limits the range of communication to the distance a voice can carry, and limits the audience to those present when the speech is uttered . The invention of writing, which converted spoken language into visual symbols, extended the range of communication across space and time.

                    The process of encoding converts information from a source into symbols for communication or storage. Decoding is the reverse process, converting code symbols back into a form that the recipient understands, such as English or/and Spanish.

                    One reason for coding is to enable communication in places where ordinary plain language, spoken or written, is difficult or impossible. For example, semaphore, where the configuration of flags held by a signaler or the arms of a semaphore tower encodes parts of the message, typically individual letters and numbers. Another person standing a great distance away can interpret the flags and reproduce the words sent.</p>
                <p className="font1">In communications and information processing, code is a system of rules to convert information—such as a letter, word, sound, image, or gesture—into another form, sometimes shortened or secret, for communication through a communication channel or storage in a storage medium. An early example is the invention of language, which enabled a person, through speech, to communicate what they thought, saw, heard or felt to others. But speech limits the range of communication to the distance a voice can carry, and limits the audience to those present when the speech is uttered . The invention of writing, which converted spoken language into visual symbols, extended the range of communication across space and time.

                    The process of encoding converts information from a source into symbols for communication or storage. Decoding is the reverse process, converting code symbols back into a form that the recipient understands, such as English or/and Spanish.

                    One reason for coding is to enable communication in places where ordinary plain language, spoken or written, is difficult or impossible. For example, semaphore, where the configuration of flags held by a signaler or the arms of a semaphore tower encodes parts of the message, typically individual letters and numbers. Another person standing a great distance away can interpret the flags and reproduce the words sent.</p>
                <p className="font1">In communications and information processing, code is a system of rules to convert information—such as a letter, word, sound, image, or gesture—into another form, sometimes shortened or secret, for communication through a communication channel or storage in a storage medium. An early example is the invention of language, which enabled a person, through speech, to communicate what they thought, saw, heard or felt to others. But speech limits the range of communication to the distance a voice can carry, and limits the audience to those present when the speech is uttered . The invention of writing, which converted spoken language into visual symbols, extended the range of communication across space and time.

                    The process of encoding converts information from a source into symbols for communication or storage. Decoding is the reverse process, converting code symbols back into a form that the recipient understands, such as English or/and Spanish.

                    One reason for coding is to enable communication in places where ordinary plain language, spoken or written, is difficult or impossible. For example, semaphore, where the configuration of flags held by a signaler or the arms of a semaphore tower encodes parts of the message, typically individual letters and numbers. Another person standing a great distance away can interpret the flags and reproduce the words sent.</p>
                <p className="font1">In communications and information processing, code is a system of rules to convert information—such as a letter, word, sound, image, or gesture—into another form, sometimes shortened or secret, for communication through a communication channel or storage in a storage medium. An early example is the invention of language, which enabled a person, through speech, to communicate what they thought, saw, heard or felt to others. But speech limits the range of communication to the distance a voice can carry, and limits the audience to those present when the speech is uttered . The invention of writing, which converted spoken language into visual symbols, extended the range of communication across space and time.

                    The process of encoding converts information from a source into symbols for communication or storage. Decoding is the reverse process, converting code symbols back into a form that the recipient understands, such as English or/and Spanish.

                    One reason for coding is to enable communication in places where ordinary plain language, spoken or written, is difficult or impossible. For example, semaphore, where the configuration of flags held by a signaler or the arms of a semaphore tower encodes parts of the message, typically individual letters and numbers. Another person standing a great distance away can interpret the flags and reproduce the words sent.</p>
            </div>

            <div className="max-width-1 m-auto"><hr /></div>
            <div className="home-articles max-width-1 m-auto font2">
                <h2 className="text-3xl pb-6 text-center text-mainColor font-bold">People who read this also read</h2>
                <div className="row">


                    <div className="home-article more-post">
                        <div className="home-article-img">
                            <img src={img11} alt="article" />
                        </div>
                        <div className="home-article-content font1 center">
                            <a href="/blogpost.html"><h3>Learn more about Machine Learning techniques in India by joining this channel</h3></a>

                            <div>Author Name</div>
                            <span>07 January | 6 min read</span>
                        </div>
                    </div>
                    <div className="home-article more-post">
                        <div className="home-article-img">
                            <img src={img1} alt="article" />
                        </div>
                        <div className="home-article-content font1 center">
                            <a href="/blogpost.html"><h3>Learn more about Machine Learning techniques in India by joining this channel</h3></a>

                            <div>Author Name</div>
                            <span>07 January | 6 min read</span>
                        </div>
                    </div>
                    <div className="home-article more-post">
                        <div className="home-article-img">
                            <img src={img2} alt="article" />
                        </div>
                        <div className="home-article-content font1 center">
                            <a href="/blogpost.html"><h3>Learn more about Machine Learning techniques in India by joining this channel</h3></a>

                            <div>Author Name</div>
                            <span>07 January | 6 min read</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
>>>>>>> aacd397fae599bdecfbcb4ad8c77f75401f210ef
