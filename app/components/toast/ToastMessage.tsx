interface ToastMessageProps {
  icon: React.ReactElement;
  status: string;
  text: string;
}

const ToastMessage = ({ icon, status, text }: ToastMessageProps) => {
  return (
    <div className="flex gap-3 rounded-lg border border-neutral-600 bg-neutral-900 p-4">
      <div className="mt-1 [&>svg]:h-4 [&>svg]:w-4">{icon}</div>
      <div>
        <span className="font-medium">{status}</span>
        <br />
        <span className="text-sm text-neutral-300">{text}</span>
      </div>
    </div>
  );
};

export default ToastMessage;
