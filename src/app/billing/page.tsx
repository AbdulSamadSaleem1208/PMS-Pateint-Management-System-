export default function BillingPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Billing & Invoices
                </h2>
                <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">Create Invoice</button>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    <li className="px-4 py-4 sm:px-6">Invoice #1001 - Alice Freeman - $150.00 - Paid</li>
                    <li className="px-4 py-4 sm:px-6">Invoice #1002 - Bob Johnson - $300.00 - Pending</li>
                </ul>
            </div>
        </div>
    );
}
