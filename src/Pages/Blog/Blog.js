import './Blog.css';
import Footer from "../../Components/Footer/Footer";
// import BlogpostArchive from "../../Components/BlogpostArchive/BlogpostArchive";
import React, {useState, useEffect} from "react";
import RectangleArchives from "../../Components/RectangleArchives/RectangleArchives";
import NavbarBlog from "../../Components/NavbarBlog/NavbarBlog";
import axios from 'axios'
// import ReactPaginate from "react-paginate";

function Blog() {

    const [data, setData] = useState({})

    useEffect(() => {
        async function fetchData() {
        const url = "https://frontend-case-api.sbdev.nl/api/posts";
        const params = {
            page: 1,
            perPage: 10,
            sortBy: 'title',
            sortDirection: 'asc',
            searchPhrase: 'test ber',
            categoryId: 1,
            headers: {
                'token': 'pj11daaQRz7zUIH56B9Z'
            }
        };

        try {
            const response = await axios.get(url, params);
            setData(response.data)
            console.log(response.data.data.slice(0,4));
        } catch (error) {
            console.error('Error:', error);
        }
    }

        fetchData()
    }, [])


    return (
        <>
            <NavbarBlog/>

            {console.log(data.data)}
            <div className="Archive-session">
                <div className="stacked-group-copy">

                    <div className="box-blogpost">
                        {data.data && data.data.map((test) => {
                            return <RectangleArchives img={test.img_url} content={test.content} title={test.title}/>
                        })}
                    </div>

                    <div className="pagination">

                    </div>

                </div>

            </div>

            <Footer/>
        </>
    );
}

export default Blog;
