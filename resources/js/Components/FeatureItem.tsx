import { Feature } from "@/types";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import ActionDropDown from "./ActionDropDown";

export default function FeatureItem({ feature }: { feature: Feature }) {
    const [isexpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isexpanded);
    };
    return (
        <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
                <div className="flex flex-col items-center">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-12"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 15.75 7.5-7.5 7.5 7.5"
                            />
                        </svg>
                    </button>

                    <span className="text-2xl font-simibold">12</span>

                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-12"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl mb-2">
                        <Link href={route("feature.show", feature)}>
                            {feature.name}
                        </Link>
                    </h2>
                    <p>
                        {isexpanded
                            ? feature.description
                            : `${feature.description.slice(0, 200)}...`}
                    </p>
                    <button
                        onClick={toggleReadMore}
                        className="text-amber-500 hover:underline"
                    >
                        {isexpanded ? "Read less" : "Read more"}
                    </button>
                
                
                </div>
                
                <div>
                    <ActionDropDown feature={feature} />
                </div>

            </div>
        </div>
    );
}
