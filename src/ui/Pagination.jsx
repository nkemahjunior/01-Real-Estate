import { useSearchParams } from "react-router-dom";
import PAGE_SIZE from "./PAGE_SIZE"

function Pagination({count}) {
    
    
    const [searchParams, setSearchParams] = useSearchParams();
    
    const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
    
    const pageCount = Math.ceil(count / PAGE_SIZE);
    
  
    function nextPage() {
      const next = currentPage === pageCount ? currentPage : currentPage + 1;
  
      searchParams.set("page", next);
      setSearchParams(searchParams);
    }
  
    function prevPage() {
      const prev = currentPage === 1 ? currentPage : currentPage - 1;
  
      searchParams.set("page", prev);
      setSearchParams(searchParams);
    }
  
    if (pageCount <= 1) return null;
  

    return (
        <div className="flex justify-between">
            <div className="font-inter">

                showing <span className="font-inter font-bold">{(currentPage - 1) * PAGE_SIZE + 1}</span> to <span className="font-inter font-bold"> {currentPage === pageCount ? count : currentPage * PAGE_SIZE} </span> 
                of  <span className="font-inter font-bold">
                    {count}
                </span> results
            </div>

            <div className="flex space-x-2">
                
                <div className="border-2 border-indigo-200 border-solid hover:bg-indigo-800  rounded-md text-indigo-400  p-[.2rem]  font-Rubik font-bold  " onClick={prevPage} > &lt; prev</div>

                <div className="border-2 border-indigo-200 border-solid hover:bg-indigo-800  rounded-md text-indigo-400  p-[.2rem]  font-Rubik font-bold " onClick={nextPage}>next &gt;</div>
            </div>

        </div>
    )
}

export default Pagination
