export function ClinicalNotes() {
    return (
        <div className="bg-white shadow sm:rounded-lg mt-6">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Clinical Notes</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
                <div className="mt-1">
                    <textarea
                        rows={5}
                        name="notes"
                        id="notes"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                        placeholder="Enter observations, treatment details, and follow-up instructions..."
                    />
                </div>
            </div>
        </div>
    );
}
