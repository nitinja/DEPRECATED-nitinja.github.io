import React from 'react';
import profilePic from './profile_pic.jpg';
export default () => {
    return (

        <div>
            <img src={profilePic} alt="my-photo" width={200} height={200} style={{'border-radius':'50%', border:'1px solid #ccc'}}/>
            <blockquote style={{margin: "50px 0"}}>
                <h6>“Simplicity is the ultimate sophistication.”</h6>
                <sub style={{color: "#777"}}>- <em>Leonardo da Vinci</em></sub>
            </blockquote>
            <br/>
            <p>
                I am lead artist and frontend developer (<a href='https://github.com/nitinja'>github</a>). I love designing polished UIs for products using cutting-edge tech. My passion? Creating beautiful, simplistic products.
            </p>
            <p>
                I am working in the industry around 10 years and worked for industry leaders like Persistent systems and startups like QIO. I have done UX design for HP and other companies. Here is my <a href='https://www.behance.net/nitinjadhav-ux'>design portfolio.</a> I primarily
                work with Sketch (and other design tools), Javascript, React, CSS and everything in between.
            </p>
            <p>As you can guess, I am a follower of simplistic design philosophies - in my design and life in general. I
                strive to be minimalist and <a href="http://gregmckeown.com/book/">essentialist</a>.</p>
            <p>I live in Pune. In my free time, I like to write <a href='https://medium.com/@nitinj'>articles</a>, read sci-fi and comics (own nice collection of comics), play computer games and have fun with my super cute wife and even cuter 1-year old <a href="https://photos.app.goo.gl/ovk4tbjv9CYs4zsJ3">daughter</a>.</p>

            <br/>Say hi on Twitter <a href='https://twitter.com/_nitinj'>@_nitinj</a> or <a href="https://www.linkedin.com/in/nitin-jadhav-23927aa/">Linkedin</a>.

        </div>

    );
};
