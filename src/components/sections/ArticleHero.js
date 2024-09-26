'use client';
import SuperSmallWidth from '../layouts/SuperSmallWidth';
import H1 from '../typography/H1';
import Text from '../typography/Text';
import Lead from '../typography/Lead';
import Breadcrumbs from './Breadcrumbs';
import DateFormatter from '../helpers/DateFormatter';

function ArticleHero({ block }) {
    return (
        <SuperSmallWidth>
            <div className="mt-20 flex font-normal text-gray-600">
                <Breadcrumbs />
            </div>
            <div className="mb-8">
                <H1>{block?.title}</H1>
            </div>
            <div className="mb-6 grid grid-cols-12 gap-6">
                <div className="col-span-6">
                    {block?.categories?.map((category, index) => {
                        if (
                            category.full_slug.includes('/news/') ||
                            category.full_slug.includes('/medienmitteilungen/')
                        ) {
                            return (
                                <span
                                    key={index}
                                    className="mb-2 mr-4 inline whitespace-nowrap border border-gray-400 px-4 py-2 text-xs text-gray-700 last-of-type:mr-0"
                                >
                                    {category.content.category}
                                </span>
                            );
                        }
                    })}
                </div>
                <div className="align-right text-md col-span-6 text-right">
                    <Text>{DateFormatter(block?.date)}</Text>
                </div>
            </div>
            <div className="mt-12">
                <Lead>{block?.lead}</Lead>
            </div>
            {block?.image_optional && (
                <img
                    src={block?.image.filename}
                    className="my-8 w-full"
                    alt="full service"
                />
            )}
        </SuperSmallWidth>
    );
}

export default ArticleHero;
