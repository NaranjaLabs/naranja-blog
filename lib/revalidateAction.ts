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
        const slug: string =
          type === 'publish' ? draft.slug.current : published.slug.current;
        const time = type === 'delete' ? 10000 : 3000;
        setTimeout(async () => {
          await fetch(`/api/revalidate?slug=${slug}`);
        }, time);
      }
    };
  };
  return BetterAction;
}
