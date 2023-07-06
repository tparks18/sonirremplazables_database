// import React from "react";

// const Pagination = ({
//   totalPost,
//   postPerPage,
//   setCurrentPage,
//   currentPage,
// }) => {
//   const pages = [];

//   for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
//     pages.push(i);
//   }

//   return (
//     <ul class="pagination">
//       {pages.map((page, index) => {
//         return (
//           <li
//             className={page == currentPage ? "active page-item" : "page-item "}
//           >
//             <a
//               key={index}
//               onClick={() => setCurrentPage(page)}
//               className="page-link"
//             >
//               {page}
//             </a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default Pagination;
