


import { Link } from "react-router-dom";
import { useGetMyBookmarks } from "./useGetMyBookmarks";
import Spinner from "../../ui/Spinner";
import ErrorBookmarks from "./ErrorBookmarks"
import BookmarksCard from "./BookmarksCard"

function BookmarkedProperties() {

    const {isLoading,data} = useGetMyBookmarks()
    if(isLoading) return <Spinner/>
    if(data===null || data.data.length < 1) return <ErrorBookmarks/>
    const {data:myBookmarksData} = data


    return (
        <>
            <div className="md:grid md:grid-cols-3 md:gap-8 2xl:grid-cols-4 md:px-5 2xl:p-6 ">
                
                {
                    myBookmarksData.map((el) => (
                       
                        <Link to ={`/home/rent/details/${el.id} `}  key={el.id} >
                            <BookmarksCard key={el.id} searchData ={el} isLoading={isLoading} id = {el.id} bookmarkdata = {myBookmarksData} />
                        </Link>
                    ))
                
                }
            </div>


        </>
    )
}

export default BookmarkedProperties
