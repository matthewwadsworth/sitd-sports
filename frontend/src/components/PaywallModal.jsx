export default function PaywallModal({ onPay, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm text-center">
        <h2 className="text-xl font-bold mb-4">Unlock Full Article</h2>
        <p className="mb-4">$1.09 for permanent access.</p>

        <button
          onClick={onPay}
          className="bg-yellow-500 text-black px-4 py-2 rounded font-bold"
        >
          Pay with PayPal
        </button>

        <button
          onClick={onClose}
          className="block mt-4 text-sm text-gray-600 underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
