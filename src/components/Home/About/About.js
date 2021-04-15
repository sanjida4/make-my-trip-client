import React from 'react';

const About = () => {
    return (
        <div id='about' className='container'>
            <h1 style={{marginTop: '320px', color: 'darkblue'}} className='text-center'>Our Featured Videos</h1>
            <div className= 'd-flex mt-5 pt-5'>
                <div className="col-md-5">
                    <iframe width="370" height="250" src="https://www.youtube.com/embed/1heeXKUAFyA"></iframe>
                </div>
                <div className="col-md-5">
                    <iframe width="370" height="250" src="https://www.youtube.com/embed/ssU0VFliS9g"></iframe>
                </div>
                <div className="col-md-5">
                    <iframe width="370" height="250" src="https://www.youtube.com/embed/vZFEMAi82yo"></iframe>
                </div>
            </div>
            <p className="mt-5 ms-5 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ducimus perferendis. Repellendus nisi id suscipit, et accusamus atque blanditiis fugit corporis accusantium nulla, alias voluptatem sint possimus esse dolores quam aliquid velit consequuntur error quod adipisci delectus necessitatibus laborum veritatis? Tempore perferendis, repellendus, cum tempora eveniet, exercitationem quis maxime ad non ea blanditiis vero! Quis eum esse veniam. Quia pariatur architecto eum placeat, necessitatibus cum quasi rem, eius perferendis beatae qui suscipit quibusdam? Molestias repellendus, laborum enim natus consequatur ea doloremque accusantium, praesentium numquam illum expedita? Harum asperiores autem ab id distinctio eveniet alias maiores quam laudantium omnis delectus, fuga tempora error molestiae enim aliquam, ipsa officiis expedita blanditiis nesciunt veritatis nostrum optio esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatibus provident magni fuga incidunt voluptatem, minima blanditiis, error id maxime dolores? Accusamus autem optio ducimus delectus quas voluptatum quisquam porro!
            </p>
        </div>
    );
};

export default About;