import Link from 'next/link';

export default function StudioNavBar(props: any) {
  return (
    <>
      <Link href="/">Voltar a main page</Link>
      <div>{props.renderDefault(props)}</div>
    </>
  );
}
