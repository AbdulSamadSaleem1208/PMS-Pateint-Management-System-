import VisitConsole from "@/components/modules/visits/visit-console";

export default function VisitPage({ params }: { params: { id: string } }) {
    return <VisitConsole visitId={params.id} />;
}
