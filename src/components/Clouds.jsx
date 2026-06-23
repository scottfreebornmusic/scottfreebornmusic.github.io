// Sky parallax layer over the hero: clouds drifting left-to-right at varied
// speeds and heights, plus a raven flying the OTHER way (right-to-left) against
// them. Cloud art: cloud.png ... cloud5.png in /public/brand.
export default function Clouds() {
  return (
    <div className="sky" aria-hidden="true">
      <img className="sky__cloud sky__cloud--1" src="/brand/cloud.png" alt="" />
      <img className="sky__cloud sky__cloud--2" src="/brand/cloud2.png" alt="" />
      <img className="sky__cloud sky__cloud--3" src="/brand/cloud3.png" alt="" />
      <img className="sky__cloud sky__cloud--4" src="/brand/cloud4.png" alt="" />
      <img className="sky__cloud sky__cloud--5" src="/brand/cloud5.png" alt="" />
      <img className="sky__cloud sky__cloud--6" src="/brand/cloud.png" alt="" />
      <img className="sky__cloud sky__cloud--7" src="/brand/cloud2.png" alt="" />
      <img className="sky__cloud sky__cloud--8" src="/brand/cloud3.png" alt="" />
    </div>
  )
}
