
import Image from 'next/image';
import React from 'react';

const QurbanihatTips = () => {
    return (
        <div className='container mx-auto py-12 px-4 animate__animated animate__slideInUp'>
            <h2 className='text-5xl font-bold text-center pb-3 '>QurbaniHat Tips</h2>
            <div className='flex justify-center mb-2'>
                <div className='w-16 h-1 bg-yellow-600 rounded-full' />
            </div>
            <p className='text-base text-center max-w-3xl mx-auto text-gray-600 leading-relaxed mt-4'>
                Performing Qurbani correctly requires careful preparation to ensure the sacrifice is both spiritually valid and humanely carried out. From selecting the right animal to the final distribution of meat, these tips cover the essential steps for a successful Qurbani.
            </p>

            <div className='pt-12 flex flex-col gap-12'>

                {/* Section 1 */}
                <div className='flex flex-col md:flex-row gap-8 items-stretch max-w-5xl mx-auto w-full'>
                    <div className='flex-shrink-0 rounded-xl overflow-hidden shadow-md'>
                        <Image src="/qurbanihat-1.jpg" height={400} width={400} alt="Selecting the right animal" className='object-cover h-full w-full' />
                    </div>
                    <div className='bg-white border border-gray-100 shadow-sm rounded-xl p-6 flex flex-col justify-center'>
                        <h3 className='text-xl font-bold text-green-900 mb-1'>1. Selecting the Right Animal</h3>
                        <p className='text-sm text-gray-500 italic mb-4'>Choosing a healthy, valid animal is the first step in a proper sacrifice.</p>
                        <ul className='flex flex-col gap-3 text-gray-700 text-sm leading-relaxed'>
                            <li><span className='font-semibold text-green-800'>Health and Defects:</span> The animal must be healthy and free from major defects. Avoid animals that are blind, lame, severely sick, or extremely thin. It should have an energetic demeanor, bright eyes, and a good layer of fat.</li>
                            <li><span className='font-semibold text-green-800'>Age Requirements:</span> Each species must meet a minimum age. Sheep and goats must be at least one year old, cows at least two years old, and camels at least five years old.</li>
                            <li><span className='font-semibold text-green-800'>Source of Funds:</span> Ensure the animal is purchased using halal income and that it is properly owned, not borrowed or obtained unlawfully.</li>
                        </ul>
                    </div>
                </div>

                {/* Section 2 */}
                <div className='flex flex-col md:flex-row gap-8 items-stretch max-w-5xl mx-auto w-full'>
                    <div className='flex-shrink-0 rounded-xl overflow-hidden shadow-md'>
                        <Image src="/qurbani-3.jpg" height={400} width={400} alt="Preparing for the sacrifice" className='object-cover h-full w-full' />
                    </div>
                    <div className='bg-white border border-gray-100 shadow-sm rounded-xl p-6 flex flex-col justify-center'>
                        <h3 className='text-xl font-bold text-green-900 mb-1'>2. Preparing for the Sacrifice</h3>
                        <p className='text-sm text-gray-500 italic mb-4'>Spiritual readiness and practical preparation go hand in hand.</p>
                        <ul className='flex flex-col gap-3 text-gray-700 text-sm leading-relaxed'>
                            <li><span className='font-semibold text-green-800'>The Niyyah (Intention):</span> Sincere intention is essential; your sacrifice should be purely for the sake of Allah alone.</li>
                            <li><span className='font-semibold text-green-800'>Sunnah Practices:</span> Those intending to perform Qurbani are encouraged to avoid cutting their hair and nails from the first of Dhul Hijjah until the sacrifice is complete.</li>
                            <li className='bg-green-50 border-l-4 border-green-700 pl-3 py-2 rounded-r-md'><span className='font-semibold text-green-800'>Tools and Timing:</span> Sharpen your knife thoroughly before bringing it near the animal to minimize suffering. Crucially, the sacrifice cannot be performed before the Eid al-Adha prayer has finished; doing so invalidates the Qurbani.</li>
                        </ul>
                    </div>
                </div>

                {/* Section 3 */}
                <div className='flex flex-col md:flex-row gap-8 items-stretch max-w-5xl mx-auto w-full'>
                    <div className='flex-shrink-0 rounded-xl overflow-hidden shadow-md'>
                        <Image src="/slaughtering-process.jpg" height={400} width={400} alt="The slaughtering process" className='object-cover h-full w-full' />
                    </div>
                    <div className='bg-white border border-gray-100 shadow-sm rounded-xl p-6 flex flex-col justify-center'>
                        <h3 className='text-xl font-bold text-green-900 mb-1'>3. The Slaughtering Process</h3>
                        <p className='text-sm text-gray-500 italic mb-4'>Every step must be carried out with care, precision, and compassion.</p>
                        <ul className='flex flex-col gap-3 text-gray-700 text-sm leading-relaxed'>
                            <li><span className='font-semibold text-green-800'>Humane Treatment:</span> Treat the animal with kindness and avoid causing it distress. Do not slaughter one animal in front of another.</li>
                            <li><span className='font-semibold text-green-800'>Execution:</span> Lay the animal gently on its left side facing the Qiblah. Recite <em>"Bismillahi Allahu Akbar"</em> clearly before making a swift, firm cut across the throat, windpipe, and jugular veins.</li>
                            <li><span className='font-semibold text-green-800'>Post-Slaughter:</span> Allow the blood to drain fully before beginning the skinning or butchering process.</li>
                        </ul>
                    </div>
                </div>

                {/* Section 4 */}
                <div className='flex flex-col md:flex-row gap-8 items-stretch max-w-5xl mx-auto w-full'>
                    <div className='flex-shrink-0 rounded-xl overflow-hidden shadow-md'>
                        <Image src="/last.jpg" height={400} width={400} alt="Meat distribution and hygiene" className='object-cover h-full w-full' />
                    </div>
                    <div className='bg-white border border-gray-100 shadow-sm rounded-xl p-6 flex flex-col justify-center'>
                        <h3 className='text-xl font-bold text-green-900 mb-1'>4. Meat Distribution and Hygiene</h3>
                        <p className='text-sm text-gray-500 italic mb-4'>Share the blessing with care and maintain cleanliness throughout.</p>
                        <ul className='flex flex-col gap-3 text-gray-700 text-sm leading-relaxed'>
                            <li><span className='font-semibold text-green-800'>The Three-Part Rule:</span> The recommended practice is to divide the meat into three equal portions: one for your household, one for friends and relatives, and one for the poor.</li>
                            <li className='bg-green-50 border-l-4 border-green-700 pl-3 py-2 rounded-r-md'><span className='font-semibold text-green-800'>Prohibited Sales:</span> It is strictly forbidden to sell any part of the animal, including the meat, fat, or skin, for personal profit. Additionally, the butcher must be paid in cash, not with sacrificial meat.</li>
                            <li><span className='font-semibold text-green-800'>Cleanliness:</span> Maintain high hygiene standards by washing hands frequently, sanitizing equipment, and storing meat at proper temperatures — below 4°C (40°F) for refrigeration or -18°C (0°F) for freezing.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default QurbanihatTips;