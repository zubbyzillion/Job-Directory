// import {faHeart} from "@fortAwesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import Image from "next/image";

export default function JobRow() {
    return (
        <>
         <div className="bg-white p-4 rounded-lg shadow-sm relative">
            <div className="absolute cursor-pointer top-4 right-4">
                {/* <FontAwesomeIcon className="size-4 text-gray-300" icon={faHeart} /> */}
            </div>
            <div className="flex grow gap-4">
                <div className="content-center">
                    <img className="size-12" src="https://www.logo.wine/a/logo/Spotify/Spotify-Icon-Logo.wine.svg" alt="spotify" />
                </div>
                <div className="grow sm:flex">
                    <div className="grow">
                        <div className="text-gray-500 text-sm">Spotify</div>
                        <div className="font-bold text-lg mb-1">Product Designer</div>
                        <div className="content-end text-gray-400 text-sm">Remote &middot; Ontario, Canada &middot; Full-time</div>
                    </div>
                    <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
                </div>
            </div>
         </div>
        </>
    );
}