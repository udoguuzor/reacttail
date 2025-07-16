import React from "react";
import Logo from "./assets/logo.svg"
import Image from './assets/icon.svg'
import Creat from "./assets/creat.svg"
import Tech from "./assets/Tech.png"
import Chiguzo from "./assets/brand.png"
import Gen from "./assets/gen.png"
import Code from "./assets/Code_Windows.svg"
import First from "./assets/firsr.svg"
import Cap from "./assets/second.svg"
import Human from "./assets/third.svg" 
import Home from "./assets/homepage_hero_vs_static.svg"

const Hero: React.FC=()=>{
    return(
        <div>
           <div className="w-100% h-[70px] bg-white flex justify-center items-center shadow-md  ">
            <div className="w-[90%] h-[100%] bg-white-50 flex justify-between items-center">
                <div>
                    <img className="w-30 " src={Logo} alt="" />
                </div>
                <nav className="">
                  <ul className="flex justify-between items-center gap-10" >
                    <li>Products</li>
                    <li>Resouces</li>
                    <li>Solutions</li>
                    <li>Companies</li>
                    <li>Pricing</li>
                  </ul>  

                </nav>
                <div>
                    <img src="" alt="" />
                    <ul className="flex justify-between items-center gap-10 ">
                        <li >Eng</li>
                        <li>Support</li>
                        <li>Sign in</li>
                        
                    </ul>

                </div>
                <button className="w-[150px] h-[50px] bg-[#00ED64] rounded-[5px]">Get Staretd</button>
            </div>

           </div>
           <div className="w-full h-[100px] flex justify-center p-2.5  relative ">
            <div className="w-[90%] h-[70px] bg-[#F5F7FA] rounded-[10px] mt-5 shadow-lg p-4 absolute top-5 flex justify-between items-center">
                <div>Take a free test drive of MongoDbAtla and experience the power of versality for yourself </div>
                <button className="w-[160px] h-[40px]  border-1 rounded-[15px] absolute right-20">Try free Demo</button>
            </div>
          </div>
          <div className="w-full h-[500px] flex justify-center items-center">
                <div className="w-[100%] h-[100%] flex " >
                    <div className="w-[50%] h-[100%] bg-[white]">
                        <h1 className="w-[100%] h-[200px] text-[55px] bg-[white] font-bold font-[inter]">Loved by developers Built for <span><button className="w-[300px] h-[70px] border-1 rounded-2xl absolute top-65 left-20 text-[40px] text-green-500">Streeming Data</button></span></h1>
                    <div className="w-[100%] h-[70px] text-[18px] text-[bold]">You don't need a separate database to handle transactions, rich search, or generative AI. The world's most popular modern database adapts and scales to handle all your application requirements.</div>
                <div className="w-[100%] h-[200px] flex ">
                    <button className="w-[170px] h-[50px] bg-[#00ED64] rounded-[10px] border-1 absolute left-0 bottom-10">Get Started</button>
                    <div>
                        <input type="text" name="" className="w-[170px] h-[50px] rounded-[10px] border-none absolute left-65 bottom-10 " placeholder="Lean more " />
                        <img className="w-[100px] absolute left-90 bottom-8 size-0.7" src={Image} alt="" />

                    </div>
                </div>
                    </div>
                    <div className="w-[50%] h-[100%]">
                        <img className="w-[100%] h-[100%] object-cover" src={Creat} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full h-[100px] bg-[white] flex">
                <div className="flex w-[50%] justify-between">
                 <div className="">
                   <div><h1 className="text-[30px]">57k+</h1> 
                   <p className="text-[14px]">Customer➡</p></div>
                </div>
                <div className="">
                   <div><h1 className="text-[30px]">57k+</h1> 
                   <p className="text-[14px]">Customer➡</p></div>
                </div>
                <div>
                   <div><h1 className="text-[30px]">57k+</h1> 
                   <p className="text-[14px]">Customer➡</p></div>
                </div>
                <div className="">
                   <div><h1 className="text-[30px]">57k+</h1> 
                   <p className="text-[14px]">Customer➡</p></div>
                </div>
                
               </div>
               <div className="bg-[#061621] w-[50%]"></div>


            </div>

           <div className="w-[100%] h-[300px] bg-[#001E2B] relative">
            <div className="w-[100%] h-[200px] rounded-2xl bg-[#061621] absolute top-20 flex justify-between items-center">
                <div className="w-[30%] text-3xl h-[200px] flex flex-col justify-center">
                    <div className="text-white w-[400px] text-[30px]"><h1 className="">MongoDB AI is here to help</h1></div>
                    <p className="text-white text-[18px] w-[350px]">Ask our AI assistant to help you find what you’re looking for</p>
                </div >

                <div className="w-[80%] h-[100px] text-white mx-4 flex flex-col gap-4">
                    <button className="w-[80%] h-[90px] border-2 border-white text-start align-text-top flex items-start p-2">Ask MongoDb</button>
                    <p className="text-[14px] mt-4 ">This is a generative AI chatbot. By interacting with it, you agree to MongoDB's Terms of Use and Acceptable Use Policy.</p>
                </div>
            </div>

           </div>

           <div className="w-[100%] h-[500px] flex ">
            <div className="w-[30%] h-[100%] bg-[#001E2B] gap-[20px] flex flex-col gap{70px]">
                <div className="text-[35px] text-[white]"> <span className="text-[#4FF539]">Unlock the power of A with MongoDB</span></div>
                <div className="text-[20px] text-[white] " >Discover how to leverage MongoDB to streamline development for the next generation of AI-powered applications. </div>
                <div className=" gap-3 flex-end text-white">Visit the AI Learning Hub→</div>
            </div>
            
            
            
            <div className="w-[70%] h-450px bg-[#001E2B] flex justify-between"  >
                <div className="w-[300px] h-[400px] bg-white rounded-2xl ">
                    <img className="w-[100%] h-[150px] object-cover" src={Tech} alt="" />
                    <div className="text-[25px] text-center">Transform Without Fear Fodernize Fithout Friction</div>
                    <div className="text-center text-[20px] " >Use Ai to turn complex outdated system into scalable modern service upto 10x faster</div>
                    <div className="w-[300px] h-[100px] flex flex-col justify-center text-center ">
                        <div>Lean More →</div>
                    </div>
                </div>
                <div className="w-[300px] h-[400px] bg-white rounded-2xl ">
                    <img className="w-[100%] h-[150px] object-cover" src={Chiguzo} alt="" />
                    <div className="text-[25px] text-center">Try the Atlass search Play ground Free</div>
                    <div className="text-center text-[20px] " >Explore how text search rag and vector search work together in MongoDb by building interractive demo</div>
                    <div className="w-[300px] h-[100px] flex flex-col justify-center text-center ">
                        <div>Lean More →</div>
                    </div>
                </div>
                <div className="w-[300px] h-[400px] bg-white rounded-2xl ">
                    <img className="w-[100%] h-[150px] object-cover" src={Gen} alt="" />
                    <div className="text-[25px] text-center">Transform Without Fear Fodernize Fithout Friction</div>
                    <div className="text-center text-[20px] " >Use Ai to turn complex outdated system into scalable modern service upto 10x faster</div>
                    <div className="w-[300px] h-[100px] flex flex-col justify-center text-center ">
                        <div>Lean More →</div>
                    </div>
                </div>
            </div>
           
           
           
           </div>


           <div className="w-full h-[500px] bg-[#001E2B] flex justify-center ">
           
            <div className="w-[90%] h-[100%] bg-[#001E2B] flex  ">
                <div className="w-[50%] h-[100%] "><img className="w-[100%] h-[100T%] object-cover" src={Code} alt="" /></div>
                <div className="w-[50%] h-[100%] text-white gap-10">
                    <div className=" text-[60px]">Built by developers, for developers</div>
                    <div className="text-[18px]">The document data model maps to how you think and code. Break out of rigid, tabular data structures with flexible documents that map directly to objects in your code. Embed related data into a single document to increase performance and minimize computational cost.</div>
                    <div className="w-[300px] h-[100px] flex flex-col justify-center text-center">
                        <div className="gap-3 flex-end text-white">Learn MongodB basics→</div>
                    </div>
                </div>
            </div>
           
           </div>


           <div className="w-[100%] h-[500px] bg-[#001E2B] flex justify-center">
            <div className="w-[90%] h-[90%] flex  justify-between">
                <div className="w-[350px] h-[400px] bg-[#001E2B]  shadow-2xl">
                    <div className="w-[70px] h-[70] "><img className="w-[100%] h-[100%] object-cover" src={First} alt="" /></div>
                    <div className="text-[40px] text-white">DOC</div>
                    <div className="text-[20px] text-white">Discover how to leverage MongoDB streamline developement for the next generationfor of Ai-Powered application </div>

                    <div className="w-[300px] h-[100px] flex flex-col justify-center text-[20px] flex-end">
                        <div className="gap-3 text-white ">Visit the Ai-Leadening Hub</div>
                    </div>
                </div>
                <div className="w-[350px] h-[400px] bg-[#001E2B]  shadow-2xl">
                    <div className="w-[70px] h-[70] "><img className="w-[100%] h-[100%] object-cover" src={Cap} alt="" /></div>
                    <div className="text-[40px] text-white">DOC</div>
                    <div className="text-[20px] text-white">Discover how to leverage MongoDB streamline developement for the next generationfor of Ai-Powered application </div>

                    <div className="w-[300px] h-[100px] flex flex-col justify-center text-[20px] flex-end">
                        <div className="gap-3 text-white ">Visit the Ai-Leadening Hub</div>
                    </div>
                </div>

                <div className="w-[350px] h-[400px] bg-[#001E2B]  shadow-2xl">
                    <div className="w-[70px] h-[70] "><img className="w-[100%] h-[100%] object-cover" src={Human} alt="" /></div>
                    <div className="text-[40px] text-white">DOC</div>
                    <div className="text-[20px] text-white">Discover how to leverage MongoDB streamline developement for the next generationfor of Ai-Powered application </div>

                    <div className="w-[300px] h-[100px] flex flex-col justify-center text-[20px] flex-end">
                        <div className="gap-3 text-white ">Visit the Ai-Leadening Hub</div>
                    </div>
                </div>
            
            </div>
           </div>

           <div className="w-[100%] h-[200px]] bg-[#001E2B] flex justify-center">
            <div  className="w-[90%] h-[90%] flex  justify-between">
                <div className="w-[70%] h-[100%]">
                    <div className="text-[70px] text-white">MongoDB Atlas</div>
                    <div className="text-[50px] text-white">The modern database for any use case</div>
                </div>
                
                <div className="w-[30%] h-[200px] text-white text-center">Lean About the Platform→</div>
            </div>
           </div>


           <section className="w-full h-100 bg-[#001E2B] flex justify-center items-center ">
            <div className="w-[100%] h-90 bg-[#001E2B] flex">
                <div className="w-[30%] h-90 gap-20 px-4">
                    <ul className="w-[100%] h-[100%] gap-50 px-4 text-white">
                        <li className="h-10 gap-20 px-4"><h1>Stream Process</h1></li>
                    <li className="h-10 gap-20 m-10">Operational Transaction</li>
                    <li className="h-10 gap-20 px-4">Transactional</li>
                    <li className="h-10 gap-20 px-4">Text Search</li>
                    <li className="h-10 gap-20 px-4">Analytical</li>
                    <li className="h-10 gap-20 px-4">Graph</li>
                    <li className="h-10 gap-20 px-4">Geospatial</li>
                    </ul>
                </div>
                
                <div className="w-[40%] h-90 bg-[#061621]">
                    <section className="w-[100%] h-[300px] bg-[#061621] rounded-[10px] flex flex-col justify-end shadow-2xl]">
                        <div className="text-[40px] text-white"><h1 className="text-[30px] text-white gap-[20px]">Vector Search Use Cases</h1></div>
                        <div className="text-[20px] text-white gap-[30px]">MongoDB Atlas integrates operational and vector databases in a single, unified platform. Use vector representations of your data to perform semantic search, build recommendation engines, design Q&A systems, detect anomalies, or provide context for gen AI Apps.</div>
                        <div className="w-[100%] h-100px flex justify-between">
                            <button className="w-[160px] h-[40px]  border-1 rounded-[15px] gap-50 bg-[#00ED64]">Lean More</button>
                            <div className="text-white">Documentation⋀</div>
                        </div>
                    </section>
                </div>
                
                <div className="w-[30%] h-90 bg-[#001E2B] ">
                <img className="w-[100%] h-[100%] object-cover" src={Home} alt=""/>
                </div>

            </div>

           </section>


        </div>
        
        

    )
}


export default Hero