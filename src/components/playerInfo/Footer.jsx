import Pagination from "@mui/material/Pagination"

const Footer = () => {
  return (
    <div className="flex justify-between items-center">
      <div>Showing 1 to 5 of 300 results</div>
      <Pagination count={300} />
    </div>
  )
}

export default Footer