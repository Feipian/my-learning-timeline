import { useRouter } from 'next/router';
import VideoInfo from '../../components/VideoInfo';

export default function VideoInfoPage() {
  const router = useRouter();
  const { articleId } = router.query;

  return <VideoInfo articleId={articleId as string} />;
} 