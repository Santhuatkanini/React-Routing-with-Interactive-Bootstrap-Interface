import React from 'react'

function Team() {
  return (
<div class="py-20 bg-gray-50">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Know About the Legends :</h2>
            <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Sure Academy prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3">
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://i.scdn.co/image/a4ba6ee9970d27e32c79550064ec1ced249b6f14" alt="Alvin" loading="lazy" width="640" height="805" />
                <div>
                    <h4 class="text-2xl">Alvin Jose</h4>
                    <span class="block text-sm text-gray-500">Chief Technical Officer</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTceFJmxKYuauWIHZV3nIVgnIfWCDrryEwSSxxRMQiiLw&usqp=CAU&ec=48665698" alt="man" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 class="text-2xl">Santhosh N</h4>
                    <span class="block text-sm text-gray-500">CEO-Founder</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78dCzGdsPv3p1Jemm-FdUh4xgGhGZWqe0K8AvWu-TWA&usqp=CAU&ec=48665698" alt="woman" loading="lazy" width="1000" height="667" />
                <div>
                    <h4 class="text-2xl">Chetna Shekhawat</h4>
                    <span class="block text-sm text-gray-500">Chief Operations Officer</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Team