import { avatar, background, blog__test } from "../../assets/image";
import Blog_Menu from "../../components/blog/menu/Menu";
import Comments from "../../components/comments/Comment";
import "./index.scss";

function BlogDetail() {
    return (
        <div className="blog__detail">
            <div className="container">
                <div className="blog__detail-inner">
                    <div className="blog__detail-media">
                        <div className="blog__detail-media-left">
                            <h1 className="blog__detail-media-title">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </h1>
                            <div className="blog__detail-media-user">
                                <img
                                    src={avatar}
                                    alt=""
                                    className="blog__detail-avatar"
                                />
                                <div className="blog__detail-media-info">
                                    <span className="username">Trinh Huy</span>
                                    <div className="date">01.01.2024</div>
                                </div>
                            </div>
                        </div>
                        <img src={blog__test} alt="" className="media-img" />
                    </div>

                    <div className="blog__detail-content">
                        <div className="blog__detail-post">
                            <div className="blog__detail-post-inner">
                                <p className="blog__detail-desc">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Necessitatibus unde magni
                                    quaerat incidunt totam laboriosam distinctio
                                    fugiat quod eum. Dicta maiores illo ullam
                                    officiis suscipit aut atque ut neque facere!
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Quis minus asperiores
                                    expedita sunt velit ad excepturi autem quae
                                    ea exercitationem tenetur id maiores
                                    provident voluptatum quaerat, et ex fugit,
                                    tempora non nulla enim mollitia. Maxime cum
                                    praesentium placeat assumenda nostrum est
                                    ducimus eveniet inventore omnis iure optio,
                                    aspernatur, repudiandae accusantium.
                                </p>

                                <p className="blog__detail-desc">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Necessitatibus unde magni
                                    quaerat incidunt totam laboriosam distinctio
                                    fugiat quod eum. Dicta maiores illo ullam
                                    officiis suscipit aut atque ut neque facere!
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Quis minus asperiores
                                    expedita sunt velit ad excepturi autem quae
                                    ea exercitationem tenetur id maiores
                                    provident voluptatum quaerat, et ex fugit,
                                    tempora non nulla enim mollitia. Maxime cum
                                    praesentium placeat assumenda nostrum est
                                    ducimus eveniet inventore omnis iure optio,
                                    aspernatur, repudiandae accusantium.
                                </p>
                                <p className="blog__detail-desc">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Necessitatibus unde magni
                                    quaerat incidunt totam laboriosam distinctio
                                    fugiat quod eum. Dicta maiores illo ullam
                                    officiis suscipit aut atque ut neque facere!
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Quis minus asperiores
                                    expedita sunt velit ad excepturi autem quae
                                    ea exercitationem tenetur id maiores
                                    provident voluptatum quaerat, et ex fugit,
                                    tempora non nulla enim mollitia. Maxime cum
                                    praesentium placeat assumenda nostrum est
                                    ducimus eveniet inventore omnis iure optio,
                                    aspernatur, repudiandae accusantium.
                                </p>
                            </div>
                            <Comments />
                        </div>

                        <Blog_Menu />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
