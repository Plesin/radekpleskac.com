// Dark - bg-gray-100, Red - bg-red-100, Green - bg-green-100, Yellow - bg-yellow-100, Indigo - bg-indigo-100, Purple - bg-purple-100, Pink - bg-pink-100

export default function Badge({
  children,
}: {
  children: JSX.Element | string;
}): JSX.Element {
  return (
    <span className="mr-2 inline-block rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-dark">
      {children}
    </span>
  );
}
