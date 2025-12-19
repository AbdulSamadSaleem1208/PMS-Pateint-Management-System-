export default function AuditPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Audit Logs
            </h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Time</th>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">User</th>
                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2023-10-25 10:30</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Dr. Sarah</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Started Visit #123</td>
                        </tr>
                        <tr>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2023-10-25 10:35</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Dr. Sarah</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Added Clinical Note</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
