// import Image from "next/image";

export default function JobRow() {
    return (
        <>
         <div className="bg-white p-4 rounded-md shadow-sm flex gap-4">
            <div className="content-center">
                <img className="size-12" src="https://www.logo.wine/a/logo/Spotify/Spotify-Icon-Logo.wine.svg" alt="spotify" />
            </div>
            <div className="grow">
                <div className="text-gray-500 text-sm">Spotify</div>
                <div className="font-bold">Product Designer</div>
                <div className="content-end text-gray-500 text-xs">Remote &middot; Ontario, Canada &middot; Full-time</div>
            </div>
            <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
         </div>
        </>
    );
}