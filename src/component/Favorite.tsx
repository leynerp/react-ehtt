import svgStyle from '../css/svg.module.css'
import { useFavorites } from '../hooks/useFavorites'
export const Favorite = ({ idElement }: { idElement: string }) => {
  const { handleFavorite, handleRemoveFavorite, inFavorites } = useFavorites({ idElement });
  return (
    <>
    <button onClick={handleFavorite} className={(inFavorites ?? false) ? svgStyle.addFavoriteButtonDisabled : svgStyle.addFavoriteButton} >
      <svg height="64px" width="64px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve">

              <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M372.87,8.348c-49.003,0-92.083,25.336-116.87,63.62c-24.786-38.283-67.867-63.62-116.87-63.62 C62.29,8.348,0,70.639,0,147.478c0,33.479,11.828,64.194,31.529,88.201L256,503.652L480.471,235.68 C500.172,211.673,512,180.959,512,147.478C512,70.638,449.71,8.348,372.87,8.348z"/> </g> </g> </g>

      </svg>
    </button>
    <button onClick={handleRemoveFavorite} className={(inFavorites ?? false) ? svgStyle.removeFavoriteButton : svgStyle.removeFavoriteButtonDisabled} >
     <svg viewBox="0 0 28.00 28.00" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)" strokeWidth="0.00028">

       <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

            <g id="SVGRepo_iconCarrier">

            <path clipRule="evenodd" d="M5 2.92445C5 1.8616 5.8616 1 6.92444 1H20.3956C21.4584 1 22.32 1.8616 22.32 2.92444V25.0556C22.32 26.6414 20.5096 27.5466 19.2409 26.5951L13.66 22.4094L8.07911 26.5951C6.81045 27.5466 5 26.6414 5 25.0556V2.92445ZM20.3956 3.50178C20.3956 3.18293 20.1371 2.92444 19.8182 2.92444L7.50178 2.92445C7.18293 2.92445 6.92444 3.18293 6.92444 3.50178V24.4782C6.92444 24.7161 7.19601 24.8519 7.38631 24.7092L12.5053 20.8699C13.1896 20.3567 14.1304 20.3567 14.8147 20.8699L19.9337 24.7092C20.124 24.8519 20.3956 24.7161 20.3956 24.4782V3.50178Z" fillRule="evenodd"/>

            <path d="M10 11C10 10.4477 10.4477 10 11 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H11C10.4477 12 10 11.5523 10 11Z" />

            </g>
        </svg>
       </button>
   </>
  )
}
