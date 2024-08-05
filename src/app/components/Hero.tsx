export default function Hero() {
    return (
        <section className="container py-16">
            <h1 className="text-4xl font-bold text-center">
                Your dream job in<br /> one place
            </h1>
            {/* <p className="text-center text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora reprehenderit consequatur adipisci assumenda? rum aliquam cum.
            </p> */}
            <form className="flex gap-2 mt-4 max-w-xl mx-auto">
                <input type="search" className="border border:gray-400 w-full py-2 px-3 rounded-md" placeholder="Search phrase..." />
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
            </form>
        </section>
    );
}