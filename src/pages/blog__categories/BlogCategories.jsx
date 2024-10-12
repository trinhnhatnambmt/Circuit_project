import CardList from "../../components/blog/cardList/CardList";
import Blog_Menu from "../../components/blog/menu/Menu";
import "./index.scss";
function BlogCategories() {
    return (
        <div className="blogCategories blog">
            <div className="container">
                <h1 className="blogCategories-title">Engineer blog</h1>
                <div className="blog__main">
                    <CardList />
                    <Blog_Menu />
                </div>
            </div>
        </div>
    );
}

export default BlogCategories;
