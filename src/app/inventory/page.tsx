export default function InventoryPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Inventory
                </h2>
                <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">Add Item</button>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    <li className="px-4 py-4 sm:px-6 flex justify-between">
                        <span>Botox Type A</span>
                        <span className="text-red-600 font-medium">3 Units (Low)</span>
                    </li>
                    <li className="px-4 py-4 sm:px-6 flex justify-between">
                        <span>Dermal Filler 1ml</span>
                        <span className="text-green-600 font-medium">12 Units</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
