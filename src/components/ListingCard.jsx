import { Star } from 'lucide-react';
function ListingCard(props) {
    return (
        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-300">
            <div className="relative ">
                <img src={props.image} alt={props.title} className="w-full h-[300px] object-cover" />
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full">
                    <img src="/iconCardYurak.svg" alt="like" className="w-5 h-5" />
                </button>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">{props.title}</h3>
                    <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm">{props.rating}</span>
                    </div>
                </div>

                <p className="text-sm text-gray-500">{props.location}</p>

                <p className="mt-1">
                    <span className="font-semibold text-gray-900">{props.price}</span>
                    <span className="text-sm text-gray-500"> /night</span>
                </p>
            </div>
        </div>
    );
}

export default ListingCard