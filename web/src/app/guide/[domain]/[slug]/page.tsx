import { notFound } from 'next/navigation';
import { redirect } from 'next/navigation';
import { isValidDomain } from '@/lib/domains';

interface PageProps {
  params: { domain: string; slug: string };
}

// All spoke pages redirect to the hub page
export default function GuideSpokePage({ params }: PageProps) {
  if (!isValidDomain(params.domain)) notFound();
  redirect(`/guide/${params.domain}`);
}
