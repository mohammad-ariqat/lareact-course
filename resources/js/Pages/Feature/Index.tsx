import FeatureItem from "@/Components/FeatureItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Feature, PaginatedData } from "@/types";
import { Head } from "@inertiajs/react";

export default function index({
    features,
}: {
    features: PaginatedData<Feature>;
}) {
    console.log(features);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Feeatures
                </h2>
            }
        >
            <Head title="Dashboard" />

            {features.data.map((feature) => (
                <FeatureItem feature={feature} />
            ))}
        </AuthenticatedLayout>
    );
}
