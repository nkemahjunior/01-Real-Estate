import Spinner from "../../ui/Spinner"
import {useGetMyBookmarks} from "./useGetMyBookmarks"
import ErrorBookmarks from "./ErrorBookmarks"
import { Link } from "react-router-dom"
import BookmarksCard from "./BookmarksCard"

function MyBookMarkProperties() {
    const {isLoading,data} = useGetMyBookmarks()
    if(isLoading) return <Spinner/>
    if(data===null || data.data.length < 1) return <ErrorBookmarks/>
    const {data:myBookmarkData} = data


    return (
        <>
            <div className="md:grid md:grid-cols-3 md:gap-8 2xl:grid-cols-4 md:px-5 2xl:p-6 ">
                
                {
                    myBookmarkData.map((el) => (
                       
                        <Link to ={`/home/rent/details/${el.id} `}  key={el.id} >
                            <BookmarksCard key={el.id} searchData ={el} isLoading={isLoading} id = {el.id} bookmarkdata = {myBookmarkData} />
                        </Link>
                    ))
                
                }
            </div>


        </>
    )
}

export default MyBookMarkProperties
