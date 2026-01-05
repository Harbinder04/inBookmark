const Popup = () => {
	return (
		<div className='flex flex-col gap-4 m-1 p-4 w-full'>
			<h2>Add this url to bookmarks:</h2>
			<section>
				<label>
					<span>URL</span>
					<input
						name='url'
						type='text'
						className='w-full p-2 border border-gray-300 rounded'
						placeholder='Enter URL here'
					/>
				</label>
				<label>
					<span>Tags</span>
					<input
						name='tags'
						type='text'
						className='w-full p-2 border border-gray-300 rounded mt-2'
						placeholder='Enter Tags here'
					/>
				</label>
				<label>
					Context
					<input
						name='context'
						type='text'
						className='w-full p-2 border border-gray-300 rounded mt-2'
						placeholder='Enter Context here'
					/>
				</label>
			</section>
			<section className='flex flex-row justify-between'>
				<div>
					<a
						href='#'
						className='bg-btn-green text-black px-4 py-2 rounded mt-4 inline-block shadow-lg shadow-btn-black'>
						<div>Add Bookmark</div>
					</a>
				</div>
				<div>
					<div>
						<a
							href='#'
							className='bg-btn-green text-black px-4 py-2 rounded mt-4 inline-block shadow-lg shadow-btn-black'>
							<div>Add Bookmark</div>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Popup;
