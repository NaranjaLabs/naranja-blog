import { DocumentActionComponent } from 'sanity';

type Props = 'publish' | 'delete';

export default function revalidateAction(originalAction: any, type: Props) {
  const BetterAction = (props: any) => {
    const originalResult = originalAction(props);
    return {
      ...originalResult,
      onHandle: async () => {
        originalResult.onHandle();
        const draft = props.draft;
        const published = props.published;
        const slug = draft ? draft.slug.current : published.slug.current;
        const time = type === 'delete' ? 10000 : 5000;
        console.log(time);
        console.log(slug);

        setTimeout(async () => {
          await fetch(`/api/revalidate?slug=${slug}`);
        }, time);
      }
    };
  };
  return BetterAction;
}
