import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import RedirectButton from '@/Components/RedirectButton';

const JournalCard = ({ user, route, badgeContent, title, description, buttonDescription }) => {
    return (
        <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
            <div>
                {/* Conditional rendering for badge */}
                {badgeContent === 'Declined' ? (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">{badgeContent}</span>
                ) : (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{badgeContent}</span>
                )}

                <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {title}
                </h2>
                <p className="mt-1">The tab JavaScript swaps classes to control the content visibility and styling.</p>
                <div className="flex items-center gap-1 mt-1">
                    {user && (
                        <Link href={route}>
                            <RedirectButton/>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

JournalCard.propTypes = {
    user: PropTypes.bool, // Assuming user is a boolean prop
    route: PropTypes.string, // Assuming route is a string prop
    title: PropTypes.string.isRequired,
    badgeContent: PropTypes.string.isRequired,
};

export default JournalCard;
