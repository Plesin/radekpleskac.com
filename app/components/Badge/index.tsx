// Dark - bg-gray-100, Red - bg-red-100, Green - bg-green-100, Yellow - bg-yellow-100, Indigo - bg-indigo-100, Purple - bg-purple-100, Pink - bg-pink-100

export default function Badge({
  children,
}: {
  children: JSX.Element | string
}): JSX.Element {
  return (
    <span className="bg-primary text-dark text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full inline-block">
      {children}
    </span>
  )
}
