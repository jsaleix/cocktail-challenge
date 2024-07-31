interface Props {
  id: string;
  name: string;
  onClick: () => void;
  showCross?: boolean;
}

export default function IngredientItem({
  name,
  onClick,
  showCross = false,
}: Props) {
  return (
    <span
      onClick={onClick}
      className="flex w-fit rounded-xl border-2 border-white px-2 py-1 cursor-pointer hover:opacity-80 duration-200"
    >
      <p className="select-none	">{name}</p>
      {showCross && (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6268 2.74327C13.7435 2.63068 13.8366 2.49598 13.9006 2.34704C13.9647 2.19809 13.9985 2.03788 13.9999 1.87574C14.0014 1.71361 13.9706 1.5528 13.9093 1.40271C13.848 1.25262 13.7574 1.11624 13.6428 1.00153C13.5282 0.886828 13.3919 0.796095 13.2418 0.734627C13.0918 0.673159 12.931 0.642188 12.7689 0.64352C12.6068 0.644852 12.4465 0.67846 12.2975 0.742385C12.1485 0.806309 12.0137 0.899269 11.901 1.01584L7.00691 5.90831L2.11444 1.01584C2.00265 0.895871 1.86784 0.799646 1.71806 0.732906C1.56827 0.666167 1.40658 0.63028 1.24262 0.627387C1.07867 0.624494 0.915811 0.654655 0.763764 0.716069C0.611718 0.777483 0.473599 0.868893 0.357647 0.984845C0.241695 1.1008 0.150286 1.23891 0.0888718 1.39096C0.0274578 1.54301 -0.00270277 1.70587 0.000190033 1.86982C0.00308283 2.03378 0.0389697 2.19547 0.105709 2.34525C0.172449 2.49504 0.268673 2.62985 0.388644 2.74164L5.27786 7.63574L0.385388 12.5282C0.169696 12.7597 0.0522707 13.0658 0.0578522 13.3822C0.0634337 13.6985 0.191586 14.0004 0.415309 14.2241C0.639033 14.4478 0.94086 14.576 1.2572 14.5815C1.57355 14.5871 1.87971 14.4697 2.11118 14.254L7.00691 9.36154L11.8994 14.2556C12.1309 14.4713 12.437 14.5888 12.7534 14.5832C13.0697 14.5776 13.3715 14.4494 13.5953 14.2257C13.819 14.002 13.9471 13.7002 13.9527 13.3838C13.9583 13.0675 13.8409 12.7613 13.6252 12.5298L8.73597 7.63574L13.6268 2.74327Z"
            fill="#ABABAB"
          />
        </svg>
      )}
    </span>
  );
}
