import CardList from "../../components/blog/cardList/CardList";
import CategoryList from "../../components/blog/categoryList/CategoryList";
import Featured from "../../components/blog/featured/Featured";
import Blog_Menu from "../../components/blog/menu/Menu";
import "./index.scss";
function Blog() {
    return (
        <div className="blog">
            <div className="container">
                <Featured />
                <CategoryList />

                <div className="blog__main">
                    <CardList />
                    <Blog_Menu />
                </div>
            </div>
        </div>
    );
}

export default Blog;
