import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='m-8'>
            <h2 className='font-bold text-center mb-4 text-3xl'>Please read our Terms & Conditions carefully</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis commodi velit ex veniam minima animi autem cupiditate, dolore laboriosam? Quidem repudiandae fugit reiciendis in doloremque adipisci consectetur nisi natus pariatur? Nam, vero! Maiores modi corrupti sapiente cumque doloribus voluptatem libero aliquid dicta odit ipsa, nobis voluptatibus sed perspiciatis voluptates. Vitae eaque fuga inventore ipsa laudantium, ipsam consequatur deserunt molestiae reiciendis quos quaerat facere, officiis eius eos? Temporibus similique dolore earum fuga tempora iure laudantium enim ex, sequi aut fugit voluptate error perspiciatis, illo maiores esse necessitatibus dicta deleniti nisi nihil in nostrum suscipit? Accusamus quidem dolorem in veniam eligendi molestiae fuga sunt deserunt sit, numquam enim quam, quas adipisci expedita voluptatum. Optio, dicta esse ad temporibus quam, corporis eligendi asperiores quas exercitationem soluta eius eaque adipisci magnam, excepturi deserunt illum nostrum officiis nemo vel fugit incidunt id recusandae ab dolor. Maiores, minima! Veritatis deserunt esse illum facilis itaque nobis, temporibus minima facere incidunt at obcaecati cupiditate optio debitis, saepe est sapiente laborum sunt quia! Hic non voluptatibus commodi iure. Id mollitia minus dolor quae asperiores? Incidunt praesentium aut fuga voluptates repellat laborum, veritatis expedita vero repudiandae sunt dignissimos provident ipsum odio quam pariatur inventore reprehenderit excepturi alias dolorum illo. Temporibus?</p>
            <p className='mt-8'>Back to <Link className='underline text-blue-600' to='/register'>register</Link></p>
        </div>
    );
};

export default Terms;