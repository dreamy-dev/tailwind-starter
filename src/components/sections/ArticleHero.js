import SuperSmallWidth from '../layouts/SuperSmallWidth';
import H1 from '../typography/H1';
import Text from '../typography/Text';
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
            <div className="grid grid-cols-12 gap-6 mb-6">
                <div className="col-span-6">
                    {block?.categories?.map((category, index) => {
                        if (
                            category.full_slug.includes('/news/') ||
                            category.full_slug.includes('/medienmitteilungen/')
                        ) {
                            return (
                                <span
                                    key={index}
                                    className="mb-2 inline text-gray-700 px-4 py-2 mr-4 border border-gray-400 text-xs last-of-type:mr-0 whitespace-nowrap"
                                >
                                    {category.content.category}
                                </span>
                            );
                        }
                    })}
                </div>
                <div className="col-span-6 align-right text-right text-md">
                    <Text>{DateFormatter(block?.date)}</Text>
                </div>
            </div>
            <div className="text-lg mt-12">
                <Text>{block?.lead}</Text>
            </div>
            <img
                src={block?.image?.filename}
                className="w-full my-8"
                alt="full service"
            />
        </SuperSmallWidth>
    );
}

export default ArticleHero;
