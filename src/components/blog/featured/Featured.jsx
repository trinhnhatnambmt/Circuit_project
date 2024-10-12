import { blog__test, fire } from "../../../assets/image";
import "./index.scss";
function Featured() {
    return (
        <div className="featured">
            <div className="featured__inner">
                <h1 className="featured__title">
                    <b>Hey, Circuit here!</b> Discover our story and creative
                    your ideas
                    <img src={fire} alt="" />
                </h1>

                <div className="featured__post">
                    <div className="featured___post-imgContainer">
                        <img src={blog__test} alt="" className="post__img" />
                    </div>
                    <div className="featured__post-textContainer">
                        <h1 className="featured__post-title">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </h1>
                        <p className="featured__post-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Totam rerum, necessitatibus earum sit
                            perspiciatis sequi fugit expedita maxime sed, iste
                            rem alias natus dolorum corrupti tempore saepe.
                            Voluptatem, voluptate atque.
                        </p>
                        <button className="btn featured__post-btn">
                            Read more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
